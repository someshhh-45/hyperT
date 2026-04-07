/**
 * Example Navbar Component
 * Location: src/components/common/Navbar.jsx
 */

import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Hackathon</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#features"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Features
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
