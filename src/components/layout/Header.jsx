"use client"

import React, { useState, useEffect } from "react"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('header')) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <header className={`bg-gradient-to-r from-indigo-900 to-purple-800 py-2 px-4 sm:py-3 sm:px-6 md:py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full sm:w-auto mb-2 sm:mb-0">
          <a href="/" className="flex items-center gap-2">
            <img src="images/image.svg" alt="KamalTaxPro Logo" className="h-12 sm:h-16 md:h-20" />
            <div >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 leading-tight">Kamal Legal FinTax Pro</h1>
              <p className="text-xs md:text-sm text-amber-100 hidden sm:block">Legal | Finance | Taxation | Accounts</p>
            </div>
          </a>
          
          <button className="sm:hidden text-amber-100" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-2 md:space-x-4 lg:space-x-6 flex-wrap justify-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/consult-us">Consult Us</NavLink>
          <NavLink href="/buy-dsc">Buy DSC</NavLink>
          <NavLink href="/newsletter">Newsletter</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/login" className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md transition-colors ml-2">Login</NavLink>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`sm:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-1 py-3 px-2 bg-indigo-900 border-t border-indigo-700 rounded-b-lg mt-2">
          <MobileNavLink href="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
          <MobileNavLink href="/courses" onClick={toggleMobileMenu}>Courses</MobileNavLink>
          <MobileNavLink href="/services" onClick={toggleMobileMenu}>Services</MobileNavLink>
          <MobileNavLink href="/consult-us" onClick={toggleMobileMenu}>Consult Us</MobileNavLink>
          <MobileNavLink href="/buy-dsc" onClick={toggleMobileMenu}>Buy DSC</MobileNavLink>
          <MobileNavLink href="/newsletter" onClick={toggleMobileMenu}>Newsletter</MobileNavLink>
          <MobileNavLink href="/about-us" onClick={toggleMobileMenu}>About Us</MobileNavLink>
          <MobileNavLink href="/faq" onClick={toggleMobileMenu}>FAQ</MobileNavLink>
          <div className="pt-2 pb-1">
            <MobileNavLink href="/login" onClick={toggleMobileMenu} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md inline-block">Login</MobileNavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

const NavLink = ({ href, children, className = "" }) => {
  return (
    <a href={href} className={`text-amber-100 hover:text-amber-400 font-medium transition-colors text-sm md:text-base px-2 py-1 ${className}`}>
      {children}
    </a>
  )
}

const MobileNavLink = ({ href, children, onClick, className = "" }) => {
  return (
    <a
      href={href}
      className={`text-amber-100 hover:text-amber-400 font-medium transition-colors block py-2 px-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Header