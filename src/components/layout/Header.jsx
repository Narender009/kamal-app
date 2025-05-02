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



  return (
    <header className={`bg-gradient-to-r from-indigo-900 to-purple-800 py-2 px-4 sm:py-3 sm:px-6 md:py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img src="images/logo.png" alt="KamalTaxPro Logo" className="h-20" />
          <div>
            <h1 className="text-2xl font-bold text-amber-400">Kamal Legal FinTax Pro Solution</h1>
            <p className="text-sm text-amber-100">Legal | Finance | Taxation | Accounts</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          {/* <NavLink href="/courses">Courses</NavLink> */}
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/consult-us">Consult Us</NavLink>
          <NavLink href="/buy-dsc">Buy DSC</NavLink>
          <NavLink href="/newsletter">Newsletter</NavLink>
          <NavLink href="/about-us">About us</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/login" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors">Login</NavLink>
        </nav>

        <button className="md:hidden text-amber-100" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-indigo-900 border-t border-indigo-700">
          <div className="flex flex-col space-y-3 py-4 px-6">
            <MobileNavLink href="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
            <MobileNavLink href="/courses" onClick={toggleMobileMenu}>Courses</MobileNavLink>
            <MobileNavLink href="/services" onClick={toggleMobileMenu}>Services</MobileNavLink>
            <MobileNavLink href="/consult-us" onClick={toggleMobileMenu}>Consult Us</MobileNavLink>
            <MobileNavLink href="/buy-dsc" onClick={toggleMobileMenu}>Buy DSC</MobileNavLink>
            <MobileNavLink href="/newsletter" onClick={toggleMobileMenu}>Newsletter</MobileNavLink>
            <MobileNavLink href="/about-us" onClick={toggleMobileMenu}>About us</MobileNavLink>
            <MobileNavLink href="/faq" onClick={toggleMobileMenu}>FAQ</MobileNavLink>
            <MobileNavLink href="/login" onClick={toggleMobileMenu} className="bg-amber-500 text-white px-4 py-2 rounded-md inline-block mt-2">Login</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ href, children, className = "" }) => {
  return (
    <a href={href} className={`text-amber-100 hover:text-amber-400 font-medium transition-colors ${className}`}>
      {children}
    </a>
  )
}

const MobileNavLink = ({ href, children, onClick, className = "" }) => {
  return (
    <a
      href={href}
      className={`text-amber-100 hover:text-amber-400 font-medium transition-colors block py-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Header