import nodemailer from 'nodemailer'

interface ContactForm {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

interface Env {
  SMTP_HOST?: string
  SMTP_PORT?: string
  SMTP_USER?: string
  SMTP_PASS?: string
  MAIL_TO?: string
}

function buildEmailHtml(data: ContactForm): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: 'Noto Sans SC', sans-serif; background: #f5f5f5; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #0284c7, #06b6d4); padding: 32px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 20px;">📩 南京盛网官网新留言</h1>
      <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">
        收到新的客户咨询，请及时跟进
      </p>
    </div>
    <!-- Body -->
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 16px; background: #f8fafc; border-radius: 8px 8px 0 0; font-weight: 600; color: #0c4a6e;" colspan="2">客户信息</td>
        </tr>
        ${[
          ['姓名', data.name],
          ['公司', data.company || '未填写'],
          ['邮箱', data.email],
          ['电话', data.phone || '未填写'],
        ]
          .map(
            ([label, value], i) =>
              `<tr${i % 2 === 0 ? '' : ''}>
                <td style="padding: 10px 16px; color: #64748b; font-size: 14px; width: 80px; border-bottom: 1px solid #f1f5f9;">${label}</td>
                <td style="padding: 10px 16px; color: #1e293b; font-size: 14px; border-bottom: 1px solid #f1f5f9;">${value}</td>
              </tr>`
          )
          .join('')}
      </table>
      <div style="margin-top: 20px;">
        <div style="padding: 12px 16px; background: #f8fafc; border-radius: 8px 8px 0 0; font-weight: 600; color: #0c4a6e; font-size: 14px;">留言内容</div>
        <div style="padding: 16px; background: #fefefe; border: 1px solid #f1f5f9; border-radius: 0 0 8px 8px; color: #334155; font-size: 14px; line-height: 1.7;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div style="background: #f8fafc; padding: 16px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="color: #94a3b8; font-size: 12px; margin: 0;">
        此邮件由南京盛网信息科技有限公司官网自动发送
      </p>
    </div>
  </div>
</body>
</html>`
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    // ── API: 联系表单 ──
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const data: ContactForm = await request.json()

        // 基础验证
        if (!data.name || !data.email || !data.message) {
          return Response.json({ success: false, error: '请填写姓名、邮箱和留言内容' }, { status: 400 })
        }

        // 创建 SMTP 传输器（飞书 SMTP 推荐 587 端口 + STARTTLS）
        const smtpPort = Number(env.SMTP_PORT) || 587
        const transporter = nodemailer.createTransport({
          host: env.SMTP_HOST || 'smtp.feishu.cn',
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: env.SMTP_USER || '',
            pass: env.SMTP_PASS || '',
          },
          tls: {
            rejectUnauthorized: false,
          },
        })

        await transporter.sendMail({
          from: env.SMTP_USER || 'njsw@hayjxs.cn',
          to: env.MAIL_TO || 'njsw@hayjxs.cn',
          subject: `新留言 - ${data.name}${data.company ? ` (${data.company})` : ''}`,
          html: buildEmailHtml(data),
        })

        return Response.json({ success: true })
      } catch (err) {
        const message = err instanceof Error ? err.message : '发送失败'
        const detail = err instanceof Error ? `${err.name}: ${err.message}` : '未知错误'
        console.error('SMTP Error:', detail)
        return Response.json({ success: false, error: message, detail }, { status: 500 })
      }
    }

    // ── 预检请求 ──
    if (url.pathname === '/api/contact' && request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    // ── 其余请求由静态资源处理 ──
    return new Response('Not Found', { status: 404 })
  },
}
