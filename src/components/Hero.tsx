export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-accent-600/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-white/80 text-sm">成立于 2012 年，服务超过 100+ 客户</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            专业 IT 基础设施
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              综合解决方案
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            南京盛网信息科技是一家致力于服务器、存储、网络设备与信息安全的 IT 硬件产品供应商，
            提供网络系统集成和综合布线方案设计、施工、调试、维护于一体化的专业服务。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5"
            >
              获取解决方案
            </button>
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-center"
            >
              了解更多
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">13+</div>
              <div className="text-gray-400 text-sm mt-1">年行业经验</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-gray-400 text-sm mt-1">服务客户</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">508万</div>
              <div className="text-gray-400 text-sm mt-1">注册资本</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">14人</div>
              <div className="text-gray-400 text-sm mt-1">专业团队</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}