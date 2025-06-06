"use client"

import React, { useState, useEffect } from "react"
import { useAuth } from "../Context/AuthContext"
import ApiService from "../services/api"
import { 
  UserCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Settings, 
  FileText, 
  CreditCard, 
  Bell,
  Edit3,
  Save,
  X,
  User,
  Briefcase,
  LogOut,
  Loader2,
  AlertCircle
} from "lucide-react"

const AccountPage = () => {
  const { user, isAuthenticated, logout, updateProfile } = useAuth()
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    joinDate: "",
    profession: ""
  })

  // Mock data for services and transactions
  const [services] = useState([
    { id: 1, name: "GST Registration", status: "Completed", date: "2024-03-15" },
    { id: 2, name: "Income Tax Filing", status: "In Progress", date: "2024-03-20" },
    { id: 3, name: "DSC Certificate", status: "Pending", date: "2024-03-25" }
  ])

  const [transactions] = useState([
    { id: 1, service: "GST Registration", amount: "₹2,500", date: "2024-03-15", status: "Paid" },
    { id: 2, service: "Tax Consultation", amount: "₹1,200", date: "2024-03-10", status: "Paid" },
    { id: 3, service: "DSC Certificate", amount: "₹3,000", date: "2024-03-25", status: "Pending" }
  ])

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!isAuthenticated) return
      
      try {
        setIsFetching(true)
        setError(null)
        
        // Try to get fresh profile data from API
        const response = await ApiService.getProfile()
        
        if (response.success) {
          const userData = response.user
          setProfileData({
            name: userData.firstName + " " + userData.lastName || "",
            email: userData.email || "",
            phone: userData.phone || userData.phoneNumber || "",
            address: userData.address || "",
            joinDate: userData.joinDate || userData.createdAt || "Not available",
            profession: userData.profession || userData.occupation || ""
          })
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error)
        // Fallback to local user data if API call fails
        if (user) {
          setProfileData({
            name: user.firstName + " " + user.lastName || "User",
            email: user.email || "",
            phone: user.phone || user.phoneNumber || "",
            address: user.address || "",
            joinDate: user.joinDate || user.createdAt || "Not available",
            profession: user.profession || user.occupation || ""
          })
        }
        setError("Failed to load profile data. Showing cached information.")
      } finally {
        setIsFetching(false)
      }
    }

    fetchUserProfile()
  }, [isAuthenticated, user])

  // Clear messages after 5 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null)
        setSuccess(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, success])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <UserCircle className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">Please log in to access your account dashboard.</p>
          <a href="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors">
            Go to Login
          </a>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  const handleSaveProfile = async () => {
    try {
      setIsLoading(true)
      setError(null)
      setSuccess(null)

      // Prepare data for API
      const updateData = {
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
        address: profileData.address,
        profession: profileData.profession
      }

      // Use the updateProfile method from AuthContext
      const result = await updateProfile(updateData)

      if (result.success) {
        setIsEditing(false)
        setSuccess("Profile updated successfully!")
        
        // Update local state with the response data
        if (result.user) {
          setProfileData(prev => ({
            ...prev,
            name: result.user.name || result.user.fullName || prev.name,
            email: result.user.email || prev.email,
            phone: result.user.phone || result.user.phoneNumber || prev.phone,
            address: result.user.address || prev.address,
            profession: result.user.profession || result.user.occupation || prev.profession
          }))
        }
      } else {
        setError(result.error || "Failed to update profile")
      }
    } catch (error) {
      console.error('Profile update error:', error)
      setError("An unexpected error occurred while updating your profile")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    // Reset form data to original values
    if (user) {
      setProfileData({
        name: user.name || user.fullName || "",
        email: user.email || "",
        phone: user.phone || user.phoneNumber || "",
        address: user.address || "",
        joinDate: user.joinDate || user.createdAt || "Not available",
        profession: user.profession || user.occupation || ""
      })
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-600 bg-green-100"
      case "In Progress": return "text-blue-600 bg-blue-100"
      case "Pending": return "text-yellow-600 bg-yellow-100"
      case "Paid": return "text-green-600 bg-green-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  if (isFetching) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Success/Error Messages */}
      {(error || success) && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>{success}</span>
            </div>
          )}
        </div>
      )}

      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-amber-400 rounded-full flex items-center justify-center">
              <UserCircle className="h-10 w-10 text-indigo-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {profileData.name || "User"}
              </h1>
              <p className="text-amber-100">Manage your account and services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-left ${
                    activeTab === "profile" ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <User className="h-5 w-5" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-left ${
                    activeTab === "services" ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Briefcase className="h-5 w-5" />
                  My Services
                </button>
                <button
                  onClick={() => setActiveTab("billing")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-left ${
                    activeTab === "billing" ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  Billing
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-left ${
                    activeTab === "settings" ? "bg-indigo-100 text-indigo-700" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      disabled={isLoading}
                      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <Edit3 className="h-4 w-4" />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveProfile}
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Save className="h-4 w-4" />
                        )}
                        {isLoading ? "Saving..." : "Save"}
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <X className="h-4 w-4" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          disabled={isLoading}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
                          placeholder="Enter your full name"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                          <User className="h-5 w-5 text-gray-500" />
                          <span>{profileData.name || "Not provided"}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          disabled={isLoading}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
                          placeholder="Enter your email"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                          <Mail className="h-5 w-5 text-gray-500" />
                          <span>{profileData.email || "Not provided"}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          disabled={isLoading}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
                          placeholder="Enter your phone number"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                          <Phone className="h-5 w-5 text-gray-500" />
                          <span>{profileData.phone || "Not provided"}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      {isEditing ? (
                        <textarea
                          value={profileData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          disabled={isLoading}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
                          placeholder="Enter your address"
                        />
                      ) : (
                        <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-md">
                          <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                          <span>{profileData.address || "Not provided"}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.profession}
                          onChange={(e) => handleInputChange("profession", e.target.value)}
                          disabled={isLoading}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
                          placeholder="Enter your profession"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                          <Briefcase className="h-5 w-5 text-gray-500" />
                          <span>{profileData.profession || "Not provided"}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                      <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                        <Calendar className="h-5 w-5 text-gray-500" />
                        <span>{profileData.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === "services" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Services</h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-gray-800">{service.name}</h3>
                          <p className="text-sm text-gray-600">Started: {service.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing & Transactions</h2>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-gray-800">{transaction.service}</h3>
                          <p className="text-sm text-gray-600">{transaction.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-gray-800">{transaction.amount}</p>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span>Email notifications for service updates</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span>SMS notifications for important updates</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="rounded" />
                        <span>Marketing emails</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Security</h3>
                    <div className="space-y-3">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
                        Change Password
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                        Enable Two-Factor Authentication
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Actions</h3>
                    <div className="space-y-3">
                      <button 
                        onClick={() => setShowLogoutConfirm(true)}
                        className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Danger Zone</h3>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Logout Confirmation Modal */}
        {showLogoutConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
              <div className="flex items-center gap-3 mb-4">
                <LogOut className="h-6 w-6 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-800">Confirm Logout</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to logout? You'll need to sign in again to access your account.
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountPage