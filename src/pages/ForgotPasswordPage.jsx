"use client"
import React, { useState } from "react";
import ApiService from "../services/api";

// React Router Link component simulation
const Link = ({ to, className, children, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
)
import { Eye, EyeOff, Mail, CheckCircle } from "lucide-react"

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!email.trim()) {
    setError("Email address is required");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address");
    return;
  }

  setIsLoading(true);

  try {
    await ApiService.forgotPassword(email);
    setIsSubmitted(true);
  } catch (err) {
    setError(err.message || "Failed to send reset instructions. Please try again.");
  } finally {
    setIsLoading(false);
  }



    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      console.log("Password reset email sent to:", email)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="py-4 px-6 bg-green-600 text-white text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-2" />
            <h2 className="text-2xl font-bold">Email Sent!</h2>
          </div>

          <div className="py-8 px-8 text-center">
            <Mail className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Check your email</h3>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Didn't receive the email? Check your spam folder or try again.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setEmail("")
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Try different email
              </button>
              
              <Link
                to="/login"
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="py-4 px-6 bg-blue-600 text-white text-center">
          <h2 className="text-2xl font-bold">Forgot Password</h2>
          <p className="text-sm mt-1">Enter your email to reset your password</p>
        </div>

        <form onSubmit={handleSubmit} className="py-6 px-8">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your registered email"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Reset Instructions"}
          </button>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              ← Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage;