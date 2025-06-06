import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Eye, EyeOff, CheckCircle } from "lucide-react"
import ApiService from "../services/api"

const ResetPasswordPage = () => {
  const { token } = useParams()

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    const { password, confirmPassword } = formData

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    // Check if token exists
    if (!token) {
      setErrors({ password: "Invalid or missing reset token" })
      return
    }

    setIsLoading(true)
    setErrors({}) // Clear any existing errors

    try {
      // Try the API service method first
      let data;
      try {
        data = await ApiService.resetPassword(token, { 
          password: formData.password,
          confirmPassword: formData.confirmPassword
        })
      } catch (apiError) {
        // If API service method fails, try direct API call with token in body
        console.log("API service method failed, trying direct call:", apiError.message)
        data = await ApiService.makeRequest('/auth/reset-password', {
          method: 'POST',
          body: JSON.stringify({ 
            token: token,
            password: formData.password,
            confirmPassword: formData.confirmPassword
          }),
        })
      }
      
      // If we get here, the request was successful
      setIsSuccess(true)
    } catch (err) {
      console.error("Reset password error:", err)
      
      // Handle different error scenarios based on error message
      const errorMessage = err.message || "Password reset failed. Please try again."
      
      if (errorMessage.toLowerCase().includes('token') || 
          errorMessage.toLowerCase().includes('expired') ||
          errorMessage.toLowerCase().includes('invalid')) {
        setErrors({ password: "Reset link has expired or is invalid. Please request a new one." })
      } else if (errorMessage.toLowerCase().includes('password')) {
        setErrors({ password: errorMessage })
      } else {
        setErrors({ password: "Network error. Please check your connection and try again." })
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Check for token on component mount
  React.useEffect(() => {
    if (!token) {
      setErrors({ password: "Invalid reset link. Please request a new password reset." })
    }
  }, [token])

  if (isSuccess) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="py-4 px-6 bg-green-600 text-white text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-2" />
            <h2 className="text-2xl font-bold">Password Reset!</h2>
          </div>
          <div className="py-8 px-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">
              Your password has been reset successfully. You can now log in with your new password.
            </p>
            <Link
              to="/login"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block text-center"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="py-4 px-6 bg-blue-600 text-white text-center">
          <h2 className="text-2xl font-bold">Reset Password</h2>
          <p className="text-sm mt-1">Enter your new password</p>
        </div>

        <form onSubmit={handleSubmit} className="py-6 px-8">
          {/* General error message */}
          {errors.password && !formData.password && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {errors.password}
            </div>
          )}

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password && formData.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter new password"
                disabled={!token}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
                disabled={!token}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && formData.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            <p className="text-gray-500 text-xs mt-1">
              Must be at least 8 characters with uppercase, lowercase, and number
            </p>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Confirm new password"
                disabled={!token}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={!token}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !token}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>

          <div className="mt-6 text-center">
            <Link to="/forgot-password" className="text-blue-600 hover:underline text-sm font-medium mr-4">
              Request new reset link
            </Link>
            <Link to="/login" className="text-blue-600 hover:underline text-sm font-medium">
              ← Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordPage