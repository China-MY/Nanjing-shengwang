export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">关于盛网</h2>
          <p className="section-subtitle mx-auto">
            专注 IT 基础设施 13 年，为客户提供高品质的硬件产品和系统集成服务
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              值得信赖的 IT 合作伙伴
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              南京盛网信息科技有限公司成立于 2012 年 6 月，注册资金 508 万人民币。
              我们是一家致力于存储、服务器、虚拟化、网络设备与信息安全的 IT 硬件产品供应商，
              也是网络系统集成和综合布线方案设计、施工、调试、维护于一体的专业性高科技公司。
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              经过多年发展，公司已由创业初期的 8 人团队成长为拥有 40 余名员工的规模，
              其中专业的产品售前售后工程师 12 人。我们与华为、山石网科、爱数等国内外知名厂商
              建立了良好的长期合作关系，获得了华为优选渠道、山石网科核心代理、爱数省级经销商等资质。
            </p>

            <div className="flex flex-wrap gap-3">
              {['华为优选渠道', '山石网科核心代理', '爱数省级经销商', 'ISO 质量认证'].map(cert => (
                <span key={cert} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: '🖥️', title: '服务器', desc: '品牌服务器及配件' },
              { icon: '💾', title: '存储设备', desc: '专业存储解决方案' },
              { icon: '🔒', title: '网络安全', desc: '防火墙与信息安全' },
              { icon: '🌐', title: '网络设备', desc: '交换机与路由器' },
              { icon: '🔧', title: '系统集成', desc: '综合布线与组网' },
              { icon: '☁️', title: '虚拟化', desc: '云平台解决方案' },
            ].map(item => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}