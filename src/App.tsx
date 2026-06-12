import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Cases from './components/Cases'
import Advantages from './components/Advantages'
import Partners from './components/Partners'
import Qualifications from './components/Qualifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Advantages />
      <Partners />
      <Qualifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
