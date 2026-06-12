const cases = [
  {
    title: '三甲医院数据中心升级',
    amount: '600W+',
    tags: ['医疗', '数据中心'],
    color: 'from-blue-500 to-cyan-500',
    achievements: [
      '构建"两地三中心"高可用架构',
      '部署超融合私有云平台',
      '资源利用率提升 30%',
      '7×24小时不间断算力支撑',
    ],
    description:
      '为三甲医院构建"两地三中心"高可用架构，部署超融合私有云，成功将数据中心资源利用率提升30%，保障业务连续性，为医疗核心业务提供7x24小时不间断的算力支撑。',
  },
  {
    title: '城商行网络安全体系建设',
    amount: '200W+',
    tags: ['金融', '安全'],
    color: 'from-purple-500 to-pink-500',
    achievements: [
      '部署AI安全态势感知平台',
      '实现秒级告警响应',
      '顺利通过等保三级测评',
      '有效阻断外部入侵行为',
    ],
    description:
      '部署AI安全态势感知平台实现秒级告警，构建全链路防护体系，顺利通过国家等保三级测评，有效阻断外部入侵行为，筑牢区域性金融机构的网络安全防线。',
  },
  {
    title: '区政府政务云安全服务',
    amount: '53W+',
    tags: ['政务', '安全服务'],
    color: 'from-emerald-500 to-teal-500',
    achievements: [
      '三年驻场运维服务',
      '累计修复高危漏洞100+',
      '成功拦截大规模DDoS攻击',
      '保障政务云系统稳定运行',
    ],
    description:
      '提供三年驻场运维服务，累计修复高危漏洞100余个，成功拦截多次大规模DDoS攻击与恶意扫描，保障政务云系统稳定运行，护航数字化政务服务落地。',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
            Classic Cases
          </span>
          <h2 className="section-title mt-2">经典案例</h2>
          <p className="section-subtitle mx-auto">
            从医疗核心数据到金融安全防线，再到政务云稳定保障 — 我们用技术实力为各行业客户构建坚实的数字底座
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="md:flex">
                {/* Left: Amount Badge + Tags */}
                <div
                  className={`md:w-72 p-8 bg-gradient-to-br ${c.color} text-white flex flex-col justify-between shrink-0`}
                >
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                  </div>
                  <div className="mt-4">
                    <div className="text-4xl font-extrabold">{c.amount}</div>
                    <div className="text-white/70 text-sm mt-1">项目金额</div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {c.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {c.achievements.map((a) => (
                      <div key={a} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-green-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
