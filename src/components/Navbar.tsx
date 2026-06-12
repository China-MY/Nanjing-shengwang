import { useState, useEffect } from 'react'

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我们' },
  { id: 'services', label: '核心业务' },
  { id: 'cases', label: '经典案例' },
  { id: 'advantages', label: '核心优势' },
  { id: 'partners', label: '合作伙伴' },
  { id: 'contact', label: '联系我们' },
]

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    setMobileOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">盛</span>
            </div>
            <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              南京盛网
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-primary-600'
                    : scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 font-medium transition-colors ${
                  activeSection === item.id ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
