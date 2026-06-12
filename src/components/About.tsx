const milestones = [
  { year: '2012', event: '公司成立，扎根南京' },
  { year: '2014', event: '成为华为优选渠道合作伙伴' },
  { year: '2016', event: '服务客户突破 50 家' },
  { year: '2019', event: '获评国家级高新技术企业' },
  { year: '2022', event: '累计交付项目超 300 个' },
  { year: '至今', event: '服务超 200 家标杆客户，持续深耕' },
]

const coreValues = [
  { title: '专业可靠', desc: '以专业能力赢得客户信赖' },
  { title: '技术领先', desc: '持续创新驱动技术升级' },
  { title: '安全可控', desc: '筑牢数字安全每一道防线' },
  { title: '合作共赢', desc: '与伙伴共享数字时代红利' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
            About Us
          </span>
          <h2 className="section-title mt-2">关于盛网</h2>
          <p className="section-subtitle mx-auto">
            您值得信赖的数字化合作伙伴 — 十四年深耕，铸就品质
          </p>
        </div>

        {/* Company Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              公司定位
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              南京盛网信息科技有限公司成立于 2012 年，是<strong className="text-gray-900">国家级高新技术企业</strong>。
              我们专注深耕数字化服务领域，为政府机构、金融行业及各类企事业单位提供
              一站式的<strong className="text-gray-900">系统集成、安全集成与全方位安全服务</strong>，
              致力于成为政企数字化转型的坚实底座。
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              自成立以来，我们已成功服务<strong className="text-gray-900">超 200 家行业标杆客户</strong>，
              累计交付<strong className="text-gray-900">近 500 个大中型复杂项目</strong>。
              在十余年的实战中，沉淀了深厚的行业经验与核心技术能力，构建了完善的服务交付体系与质量保障标准。
            </p>

            {/* Core Values */}
            <div className="flex flex-wrap gap-3 mt-6">
              {coreValues.map((v) => (
                <div
                  key={v.title}
                  className="group relative px-4 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div className="font-semibold text-gray-900 text-sm">{v.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {v.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">发展历程</h3>
            <div className="relative pl-8 border-l-2 border-primary-200 space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-[2.15rem] w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow" />
                  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-primary-600 font-bold">{m.year}</span>
                    <p className="text-gray-700 mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Scope Cards */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900">业务覆盖全景</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: '🏛️',
              title: '政府机构',
              desc: '政务云、电子政务',
            },
            {
              icon: '🏦',
              title: '金融行业',
              desc: '城商行、保险证券',
            },
            {
              icon: '🏥',
              title: '医疗卫生',
              desc: '三甲医院、医疗集团',
            },
            {
              icon: '🏭',
              title: '企事业单位',
              desc: '大中型企业、教育',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
