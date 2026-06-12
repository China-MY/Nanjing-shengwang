const partnerGroups = [
  {
    title: '基础设施硬件生态',
    subtitle: '携手顶尖硬件厂商共建底座',
    brands: ['华为 · H3C'],
    description:
      '构建高性能、高可靠的IT基础设施底座，整合服务器、存储与网络设备优势，为核心业务承载提供坚实的硬件支撑，确保系统在高并发、高负载场景下依然保持稳定运行，筑牢数字化转型的物理根基。',
    gradient: 'from-blue-600 to-blue-800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    title: '网络安全防护联盟',
    subtitle: '整合前沿安全技术与解决方案',
    brands: ['深信服 · 奇安信'],
    description:
      '与头部安全企业深度协同，融合主动防御、态势感知与数据加密技术，打造覆盖边界防护、终端安全、数据安全的全链路立体化体系，全方位护航核心数据资产安全，抵御各类网络威胁与攻击。',
    gradient: 'from-red-600 to-rose-600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
  {
    title: '云与虚拟化技术协同',
    subtitle: '引入先进架构推动资源高效调度',
    brands: ['VMware 等领军者'],
    description:
      '战略合作虚拟化领域标杆企业，引入成熟的云架构与虚拟化技术，实现计算、存储、网络资源的池化管理与灵活调度，最大化提升资源利用率，助力企业构建弹性、敏捷的IT架构，加速数字化转型进程。',
    gradient: 'from-emerald-600 to-emerald-800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15l4-8 4 4 4-4 4 4 4-8M3 21l4-8 4 4 4-4 4 4 4-8" />
      </svg>
    ),
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
  },
]

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
            Strategic Partners
          </span>
          <h2 className="section-title mt-2">战略合作伙伴</h2>
          <p className="section-subtitle mx-auto">
            与行业顶尖科技厂商建立深度战略合作伙伴关系，同步共享前沿技术成果与核心产品资源
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerGroups.map((group) => (
            <div
              key={group.title}
              className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Top Brand Bar */}
              <div className={`p-6 ${group.bgColor}`}>
                <div
                  className={`w-12 h-12 ${group.textColor} ${group.bgColor} rounded-xl flex items-center justify-center mb-4`}
                >
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{group.title}</h3>
                <p className="text-gray-500 text-sm">{group.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.brands.map((brand) => (
                    <span
                      key={brand}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${group.textColor} ${group.bgColor}`}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Description */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
