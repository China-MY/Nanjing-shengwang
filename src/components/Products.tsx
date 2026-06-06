const products = [
  {
    category: '服务器',
    items: ['品牌服务器', '塔式服务器', '机架式服务器', '刀片服务器', '服务器配件']
  },
  {
    category: '存储设备',
    items: ['NAS存储', 'SAN存储', '磁盘阵列', '备份设备', '存储配件']
  },
  {
    category: '网络设备',
    items: ['交换机', '路由器', '无线AP', '防火墙', '负载均衡']
  },
  {
    category: '软件与服务',
    items: ['VMware虚拟化', '数据备份', '安全网关', '运维服务', '技术支持']
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">产品中心</h2>
          <p className="section-subtitle mx-auto">
            精选国内外知名品牌，为您提供高品质的 IT 硬件产品
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(cat => (
            <div key={cat.category} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full group-hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            一站式采购，省心更放心
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            从方案设计、设备选型到施工调试、运维服务，我们提供全生命周期的一站式服务，
            让您的 IT 采购更加便捷高效。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['售前咨询', '方案设计', '设备供应', '施工调试', '运维服务'].map(step => (
              <span key={step} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}