export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">南京盛网信息科技有限公司</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              专业的IT硬件产品供应商和系统集成商，成立于2012年，致力于为政府机关和高校提供优质的信息化解决方案。
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">产品分类</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-white transition-colors">服务器与存储</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">网络设备</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">信息安全</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">办公设备</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">服务支持</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">系统集成</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">技术咨询</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">运维服务</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">售后服务</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                南京市
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@shengwangtech.cn
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                025-XXXXXXXX
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 南京盛网信息科技有限公司 版权所有</p>
          <p className="mt-2 md:mt-0">苏ICP备XXXXXXX号</p>
        </div>
      </div>
    </footer>
  )
}