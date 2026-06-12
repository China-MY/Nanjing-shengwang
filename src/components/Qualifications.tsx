const certGroups = [
  {
    title: '体系认证',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      { name: '质量管理体系认证', code: 'ISO 9001' },
      { name: '环境管理体系认证', code: 'ISO 14001' },
      { name: '职业健康安全管理体系认证', code: 'ISO 45001' },
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: '公司认证',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      { name: 'CCRC 信息安全服务资质', code: '信息安全风险评估' },
      { name: 'AAA 级信用等级认证', code: '企业诚信经营权威证明' },
      { name: '多维信息安全资质', code: '一级/二级全覆盖' },
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: '人员资质',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    items: [
      { name: 'CISP 注册信息安全工程师', code: '国家级信息安全专业资质' },
      { name: 'CISAW 应急服务 / 安全运维', code: '信息安全保障人员认证' },
      { name: 'PMP 项目管理专业人士', code: '国际公认项目管理认证' },
      { name: 'HCIE 数通专家', code: '华为认证ICT专家' },
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
            Certifications & Honors
          </span>
          <h2 className="section-title mt-2">资质荣誉</h2>
          <p className="section-subtitle mx-auto">
            荣获多项权威资质认证，彰显公司专业实力与服务品质
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certGroups.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${group.gradient} text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>
              </div>

              {/* List */}
              <div className="p-6 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${group.gradient} flex items-center justify-center text-white shrink-0 mt-0.5`}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{item.code}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            公司为国家高新技术企业 · 荣获行业奖项 20 余项 · 多项国家信息安全服务资质
          </p>
        </div>
      </div>
    </section>
  )
}
