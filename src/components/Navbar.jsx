import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold"><span className="text-white">Digital</span><span className="text-emerald-500">Visionar</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-emerald-500 transition">Home</a>
            <a href="#services" className="text-white hover:text-emerald-500 transition">Services</a>
            <a href="#about" className="text-white hover:text-emerald-500 transition">About</a>
            <a href="#portfolio" className="text-white hover:text-emerald-500 transition">Portfolio</a>
            <a href="#contact" className="bg-emerald-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-emerald-400 transition">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-white hover:text-emerald-500">Home</a>
            <a href="#services" className="block px-3 py-2 text-white hover:text-emerald-500">Services</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-emerald-500">About</a>
            <a href="#portfolio" className="block px-3 py-2 text-white hover:text-emerald-500">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:text-emerald-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
