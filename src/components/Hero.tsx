export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-accent-600/30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              国家级高新技术企业 · 成立于 2012 年
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            专业的数字化转型
            <br />
            与网络安全服务商
          </h1>

          {/* Sub headline */}
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl leading-relaxed">
            十四载深耕，铸就安全可控的数字基石。我们专注为政府机构、金融行业及各类企事业单位
            提供<strong className="text-white">一站式系统集成、安全集成与全方位安全服务</strong>，
            致力于成为政企数字化转型的坚实底座。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5"
            >
              获取解决方案
            </button>
            <button
              onClick={() => scrollTo('cases')}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              查看经典案例
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">14<small className="text-lg text-primary-300">年</small></div>
              <div className="text-gray-400 text-sm mt-1">行业深耕经验</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">200<small className="text-lg text-primary-300">+</small></div>
              <div className="text-gray-400 text-sm mt-1">服务客户</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">500<small className="text-lg text-primary-300">+</small></div>
              <div className="text-gray-400 text-sm mt-1">交付项目</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm mt-1">全天候响应</div>
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
