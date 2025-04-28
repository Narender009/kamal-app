"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="FinTaxPro Logo" className="h-20" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">KamalTaxPro</h1>
            <p className="text-sm text-gray-600">Finance | Taxation | Accounts</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/consult-us">Consult Us</NavLink>
          <NavLink to="/buy-dsc">Buy DSC</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>

        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
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
        <div className="md:hidden mt-4 bg-white border-t">
          <div className="flex flex-col space-y-3 py-4 px-6">
            <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
            <MobileNavLink to="/courses" onClick={toggleMobileMenu}>Courses</MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMobileMenu}>Services</MobileNavLink>
            <MobileNavLink to="/consult-us" onClick={toggleMobileMenu}>Consult Us</MobileNavLink>
            <MobileNavLink to="/buy-dsc" onClick={toggleMobileMenu}>Buy DSC</MobileNavLink>
            <MobileNavLink to="/newsletter" onClick={toggleMobileMenu}>Newsletter</MobileNavLink>
            <MobileNavLink to="/about-us" onClick={toggleMobileMenu}>About us</MobileNavLink>
            <MobileNavLink to="/faq" onClick={toggleMobileMenu}>FAQ</MobileNavLink>
            <MobileNavLink to="/login" onClick={toggleMobileMenu}>Login</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
      {children}
    </Link>
  )
}

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-blue-600 font-medium transition-colors block py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Header
