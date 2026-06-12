const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '14年行业积淀，深耕业务场景',
    subtitle: '拒绝模板，只为每个客户量身定制',
    points: [
      '深耕行业十四载，拒绝标准化模板方案',
      '深刻洞察客户业务痛点与真实需求',
      '为不同领域客户量身打造高落地性专属方案',
      '确保技术服务与业务目标同频共振',
    ],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '本地化团队，7×24小时极速响应',
    subtitle: '扎根本地，零距离服务每一位客户',
    points: [
      '组建扎根本地的专属技术服务团队',
      '7×24小时全天候快速响应机制',
      '前期咨询→日常巡检→紧急现场，全场景覆盖',
      '零距离沟通、即时性解决，不受地域限制',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: '全栈技术闭环，端到端一站式服务',
    subtitle: '从咨询到运维，消除每一个技术断层',
    points: [
      '战略咨询 → 架构设计 → 系统实施 → 运维保障 → 迭代升级',
      '全链路技术能力，一站式"交钥匙"工程交付',
      '标准化与智能化手段打造高可用物理底座',
      '为客户构建可持续演进的技术体系',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: '头部厂商深度绑定，共享前沿资源',
    subtitle: '携手华为、深信服等行业巨头，构建生态优势',
    points: [
      '与华为、深信服等行业顶尖厂商深度战略合作',
      '同步共享前沿技术成果与核心产品资源',
      '借助厂商生态优势确保方案的先进性与前瞻性',
      '让客户始终享受行业领先的技术赋能',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="section-title mt-2">核心优势</h2>
          <p className="section-subtitle mx-auto">
            十四载深耕，铸就安全可控的数字基石 — 我们为什么是您值得信赖的数字化合作伙伴
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${adv.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {adv.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{adv.title}</h3>
              <p className="text-primary-600 text-sm font-medium mb-4">{adv.subtitle}</p>

              <ul className="space-y-2">
                {adv.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-primary-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
