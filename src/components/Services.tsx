const services = [
  {
    title: '系统集成',
    description: '网络系统集成和综合布线方案设计、施工、调试、维护于一体化服务，为您打造稳定高效的 IT 基础设施。',
    icon: '🔗'
  },
  {
    title: '硬件供应',
    description: '提供服务器、存储设备、网络设备等 IT 硬件产品，品类齐全，品质保证，价格优惠。',
    icon: '🖥️'
  },
  {
    title: '技术支持',
    description: '专业的技术支持团队，提供现场服务、远程协助、培训指导等全方位技术服务。',
    icon: '🎯'
  },
  {
    title: '运维服务',
    description: '提供日常运维、故障响应、性能优化、安全加固等长期运维服务，保障系统稳定运行。',
    icon: '⚡'
  },
  {
    title: '云解决方案',
    description: '虚拟化、云计算方案设计及实施，帮助企业实现数字化转型，提升业务效率。',
    icon: '☁️'
  },
  {
    title: '安全服务',
    description: '网络安全评估、安全设备部署、安全运维托管等专业安全服务，保护您的数据安全。',
    icon: '🛡️'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">服务范围</h2>
          <p className="section-subtitle mx-auto">
            贯穿 IT 建设整个生命周期的「一站式」服务
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-primary-600 font-medium text-sm group-hover:underline cursor-pointer">
                  了解更多 →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-5xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-600">服务客户</div>
            <div className="text-sm text-gray-500 mt-1">覆盖政府机关、高校、企业</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600">技术支持</div>
            <div className="text-sm text-gray-500 mt-1">全天候响应客户需求</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-5xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-600">客户满意度</div>
            <div className="text-sm text-gray-500 mt-1">以服务赢得用户信任</div>
          </div>
        </div>
      </div>
    </section>
  )
}