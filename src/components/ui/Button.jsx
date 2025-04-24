"use client"

import React from "react"

const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors"

  const variantClasses = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
