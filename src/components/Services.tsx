const pillars = [
  {
    id: 'system',
    title: '01 系统集成',
    subtitle: '构建稳固高效的数字底座',
    gradient: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h8M8 14h4" />
      </svg>
    ),
    details: [
      {
        title: '数据中心建设与全生命周期运维',
        desc: '模块化数据中心、智能微模块解决方案，覆盖从规划设计、快速部署到持续运维的全流程，打造安全、节能、高可用的物理底座。',
      },
      {
        title: '网络互联与云架构基础设施部署',
        desc: '园区网与数据中心互联网络构建，SD-WAN广域网优化，私有云与混合云架构实施，服务器虚拟化与桌面云方案落地。',
      },
    ],
    values: [
      '一体化"交钥匙"工程交付',
      '业界领先的高可用性能保障',
      '面向未来的弹性扩展与资产保护',
    ],
  },
  {
    id: 'security',
    title: '02 安全集成',
    subtitle: '打造纵深防御的安全屏障',
    gradient: 'from-red-500 to-rose-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    details: [
      {
        title: '纵深防御架构',
        desc: '覆盖网络边界、终端接入、核心数据资产及云应用的全链路多层防御体系，消除单点防护盲区，筑牢坚实的安全底座。',
      },
      {
        title: '全域智能联动',
        desc: '打通防火墙、EDR、态势感知等异构安全设备，实现威胁情报自动关联分析，将被动告警转化为自动化快速响应与闭环处置。',
      },
      {
        title: '合规监管适配',
        desc: '深度贴合等保2.0及行业专项法规，提供专业合规差距分析、整改方案制定与落地服务，确保业务系统在合规轨道上运行。',
      },
    ],
    values: [
      '全链路多层防御体系',
      '智能威胁联动与自动响应',
      '等保合规一站式达标',
    ],
  },
  {
    id: 'service',
    title: '03 安全服务',
    subtitle: '提供持续主动的安全运营',
    gradient: 'from-emerald-500 to-teal-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: [
      {
        title: '顶尖专家赋能',
        desc: '全生命周期安全咨询、黑盒渗透测试、红蓝对抗及应急响应服务，以实战化专家能力解决复杂安全难题，提升防御实战水平。',
      },
      {
        title: '主动式风险治理',
        desc: '转变"事后补救"模式，通过持续性漏洞挖掘、威胁狩猎与基线核查，在风险发生前主动识别并阻断，构建主动防御闭环。',
      },
      {
        title: '高性价比 MSS 运维',
        desc: '集约化安全运维外包服务，优化人力成本，实现7×24小时专业安全监控与保障，让客户专注核心业务发展。',
      },
    ],
    values: [
      '实战化专家安全服务',
      '主动防御闭环治理',
      '7×24小时专业安全运维',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
            Core Business
          </span>
          <h2 className="section-title mt-2">核心业务</h2>
          <p className="section-subtitle mx-auto">
            三位一体的数字化服务架构 — 系统集成 + 安全集成 + 安全服务，全链路护航企业数字化转型
          </p>
        </div>

        <div className="space-y-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Pillar Header */}
              <div className={`p-8 bg-gradient-to-r ${pillar.gradient} text-white`}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{pillar.title}</h3>
                    <p className="text-white/80 text-sm mt-0.5">{pillar.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pillar.details.map((detail) => (
                    <div
                      key={detail.title}
                      className="p-5 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{detail.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{detail.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Value tags */}
                <div className="mt-6 flex flex-wrap gap-3 pt-6 border-t border-gray-100">
                  {pillar.values.map((v) => (
                    <span
                      key={v}
                      className="px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      <span className="text-primary-600 mr-1">✓</span>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
