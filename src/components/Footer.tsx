export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">盛</span>
                </div>
                <span className="text-white font-bold text-xl">南京盛网信息科技</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                专业的数字化转型与网络安全服务商。十四载深耕，为政府机构、金融行业及各类企事业单位
                提供一站式系统集成、安全集成与全方位安全服务。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">快速导航</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">核心业务</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">经典案例</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors">核心优势</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">合作伙伴</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">业务体系</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">系统集成</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">安全集成</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">安全服务</a></li>
                <li><a href="#qualifications" className="hover:text-white transition-colors">资质荣誉</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>南京市鼓楼区广东路38号<br />物联网科技园大楼13楼1301室</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@shengwangtech.cn" className="hover:text-white transition-colors">info@shengwangtech.cn</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:18136706556" className="hover:text-white transition-colors">18136706556</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 南京盛网信息科技有限公司 版权所有</p>
          <p className="mt-2 md:mt-0">
            <span className="text-gray-600">国家级高新技术企业</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
