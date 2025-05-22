"use client"

import React, { useState } from "react"
import { CheckCircle, Phone, Mail, FileText, Award, Clock } from "lucide-react"
import BuyDSCHeader from "../components/layout/BuyDSCHeader"

const dscTypes = [
  {
    id: 1,
    name: "Class 2 Individual DSC",
    validity: "2 Years",
    price: "₹1,499",
    features: [
      "Valid for Income Tax e-Filing",
      "Valid for MCA/ROC Filing",
      "Valid for e-Tendering",
      "Valid for GST Registration",
    ],
    recommended: false,
  },
  {
    id: 2,
    name: "Class 3 Individual DSC",
    validity: "2 Years",
    price: "₹2,499",
    features: [
      "Valid for Income Tax e-Filing",
      "Valid for MCA/ROC Filing",
      "Valid for e-Tendering",
      "Valid for GST Registration",
      "Valid for e-Procurement",
      "Higher Security Encryption",
    ],
    recommended: true,
  },
  {
    id: 3,
    name: "DGFT DSC",
    validity: "2 Years",
    price: "₹2,999",
    features: [
      "Valid for DGFT Filing",
      "Valid for Import/Export Documentation",
      "Valid for Income Tax e-Filing",
      "Valid for MCA/ROC Filing",
      "Valid for e-Tendering",
    ],
    recommended: false,
  },
]

const BuyDSCPage = () => {
  const [selectedDSC, setSelectedDSC] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    panCard: "",
    aadharCard: "",
  })
  const [activeTab, setActiveTab] = useState("buy") // Added for tab switching

  const handleDSCSelect = (id) => {
    setSelectedDSC(id)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("DSC Order:", { dscType: selectedDSC, ...formData })
    alert("Thank you for your order. We'll process it and contact you soon!")
  }

  const handleConsultSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for booking a consultation. We'll contact you shortly!")
  }

  return (
    <>
      <BuyDSCHeader />
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Digital Signature Certificate (DSC)
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Secure Your Digital Transactions with Legally Valid Signatures
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab("buy")} 
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === "buy" 
                      ? "bg-white text-blue-700" 
                      : "bg-blue-700 text-white border border-white hover:bg-blue-800"
                  }`}
                >
                  Buy DSC
                </button>
                <button 
                  onClick={() => setActiveTab("consult")} 
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === "consult" 
                      ? "bg-white text-blue-700" 
                      : "bg-blue-700 text-white border border-white hover:bg-blue-800"
                  }`}
                >
                  Consult Us
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 bottom-0 opacity-10">
            <svg width="400" height="400" viewBox="0 0 200 200">
              <path
                fill="currentColor"
                d="M47.2,111.9c-3.7,5.2-7.9,10-10.3,15.7c-2.4,5.6-2.3,12.4,1.5,17c3.8,4.6,10.3,6,16.2,6.2 c13.9,0.6,27.3-5.7,38.4-14.1s19.9-19.3,31.1-26.6c18.4-12,42.4-13.4,63.8-8.5c-5-13.7-19.8-21.8-34.1-21.5 c-12.3,0.3-24,6.4-36.1,9.3c-20.4,4.8-41.5-1.2-62.1-5.7c-8.6-1.9-19.5-1.5-22.4,7.1C30.9,99.7,43.5,106.6,47.2,111.9z"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          {activeTab === "buy" ? (
            <>
              {/* Why You Need a DSC */}
              <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
                  Why You Need a DSC
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-blue-800 mb-2">Government Filings</h3>
                    <p className="text-gray-700">
                      For filing GST Returns, ROC Filings, and MCA Forms
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-indigo-800 mb-2">Tax Filing</h3>
                    <p className="text-gray-700">
                      For Income Tax Return (ITR) filing and tender submissions
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-purple-800 mb-2">Legal Documents</h3>
                    <p className="text-gray-700">
                      For signing legal agreements and contracts digitally
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-blue-800 mb-2">Import-Export</h3>
                    <p className="text-gray-700">
                      For Import-Export (IEC) registration & DGFT filings
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FileText className="text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-indigo-800 mb-2">Government Portals</h3>
                    <p className="text-gray-700">
                      For EPFO, ICEGATE, and other government portals
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Award className="text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-purple-800 mb-2">Authentication</h3>
                    <p className="text-gray-700">
                      Ensures secure digital authentication for all your transactions
                    </p>
                  </div>
                </div>
              </div>

              {/* Our DSC Services */}
              <div className="mb-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Our DSC Services Include
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-black">
                    <h3 className="font-semibold mb-2">Class 3 DSC for Individuals & Organizations</h3>
                  </div>
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-black">
                    <h3 className="font-semibold mb-2">DGFT DSC for Importers/Exporters</h3>
                  </div>
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-black">
                    <h3 className="font-semibold mb-2">USB Token-Based Certificate Delivery</h3>
                  </div>
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-black">
                    <h3 className="font-semibold mb-2">Renewal & Upgrade Services</h3>
                  </div>
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-black">
                    <h3 className="font-semibold mb-2">Fast Application Processing & Guidance</h3>
                  </div>
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-black">
                    <h3 className="font-semibold mb-2">PAN-based Aadhaar e-KYC Support</h3>
                  </div>
                </div>
              </div>


              {/* Why Buy From Us */}
              <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
                  Why Buy DSC from Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Quick & Hassle-Free Processing</h3>
                      <p className="text-gray-600">Get your DSC with minimal paperwork and quick processing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Government Authorized DSC Provider</h3>
                      <p className="text-gray-600">Completely legal and valid certificates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Best Pricing with No Hidden Charges</h3>
                      <p className="text-gray-600">Transparent pricing with no surprise fees</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Full Support for e-KYC & Document Upload</h3>
                      <p className="text-gray-600">Complete assistance throughout the process</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Home Delivery of USB Token Available</h3>
                      <p className="text-gray-600">Get your DSC token delivered to your doorstep</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Choose Your DSC Type */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Choose Your DSC Type</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {dscTypes.map((dsc) => (
                    <div
                      key={dsc.id}
                      className={`bg-white border rounded-xl p-6 transition-all ${
                        selectedDSC === dsc.id
                          ? "border-blue-600 shadow-xl transform -translate-y-1"
                          : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
                      } ${dsc.recommended ? "relative" : ""}`}
                    >
                      {dsc.recommended && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                          RECOMMENDED
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-gray-800 mb-2">{dsc.name}</h3>
                      <p className="text-gray-600 mb-4">Validity: {dsc.validity}</p>

                      <ul className="space-y-2 mb-6">
                        {dsc.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-2xl font-bold text-blue-600">{dsc.price}</span>
                        <button
                          onClick={() => handleDSCSelect(dsc.id)}
                          className={`px-4 py-2 rounded-full font-medium transition-all ${
                            selectedDSC === dsc.id
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                              : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50"
                          }`}
                        >
                          {selectedDSC === dsc.id ? "Selected" : "Select"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Required Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <FileText className="text-blue-700" />
                    </div>
                    <h3 className="font-medium text-gray-800">PAN Card Copy</h3>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <FileText className="text-blue-700" />
                    </div>
                    <h3 className="font-medium text-gray-800">Aadhaar Card or Passport</h3>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Mail className="text-blue-700" />
                    </div>
                    <h3 className="font-medium text-gray-800">Email ID & Mobile Number linked with Aadhaar</h3>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <FileText className="text-blue-700" />
                    </div>
                    <h3 className="font-medium text-gray-800">Passport-size Photo (if required)</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6 text-center">
                  Note: You will need to upload these documents after placing the order.
                </p>
              </div>

              {/* Contact Us */}
            <div className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Us to Buy DSC</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center flex-col bg-white bg-opacity-10 p-6 rounded-lg text-black">
                  <Phone className="w-10 h-10 mb-4 text-blue-700" />
                  <h3 className="text-xl font-medium mb-2">Call</h3>
                  <p className="text-center">+91 9990778501</p>
                </div>
                <div className="flex items-center justify-center flex-col bg-white bg-opacity-10 p-6 rounded-lg text-black">
                  <Mail className="w-10 h-10 mb-4 text-blue-700" />
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className="text-center">kamalray.1992@gmail.com</p>
                </div>
                <div className="flex items-center justify-center flex-col bg-white bg-opacity-10 p-6 rounded-lg text-black">
                  <Clock className="w-10 h-10 mb-4 text-blue-700" />
                  <h3 className="text-xl font-medium mb-2">Delivery Mode</h3>
                  <p className="text-center">Online Application + USB Token Couriered to You</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-xl font-medium">
                  Get Started Today – Let Us Handle the Process While You Focus on Business.
                </p>
              </div>
            </div>


              {/* Complete Your Order Form */}
              {selectedDSC && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Complete Your Order</h2>

                  <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Full Name (as per Aadhar)
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="panCard" className="block text-gray-700 font-medium mb-2">
                          PAN Card Number
                        </label>
                        <input
                          type="text"
                          id="panCard"
                          name="panCard"
                          value={formData.panCard}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="aadharCard" className="block text-gray-700 font-medium mb-2">
                          Aadhar Card Number
                        </label>
                        <input
                          type="text"
                          id="aadharCard"
                          name="aadharCard"
                          value={formData.aadharCard}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium text-lg"
                    >
                      Place Order
                    </button>
                  </form>
                </div>
              )}

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div className="border border-gray-200 bg-white rounded-lg p-6 hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">What is a Digital Signature Certificate (DSC)?</h3>
                    <p className="text-gray-600">
                      A Digital Signature Certificate (DSC) is an electronic form of signature that helps you sign your
                      documents digitally. It ensures the authenticity of the signer and prevents tampering of documents.
                    </p>
                  </div>

                  <div className="border border-gray-200 bg-white rounded-lg p-6 hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      What is the difference between Class 2 and Class 3 DSC?
                    </h3>
                    <p className="text-gray-600">
                      Class 2 DSC provides medium level of security and is used for e-filing of income tax returns, ROC filings,
                      etc. Class 3 DSC provides high level of security and is used for e-tendering, e-procurement, and other
                      applications requiring higher security.
                    </p>
                  </div>

                  <div className="border border-gray-200 bg-white rounded-lg p-6 hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">How long does it take to get a DSC?</h3>
                    <p className="text-gray-600">
                      Once all the required documents are submitted and verified, it typically takes 1-2 working days to issue a
                      DSC. The physical token (if required) will be delivered within 3-5 working days.
                    </p>
                  </div>

                  <div className="border border-gray-200 bg-white rounded-lg p-6 hover:shadow-md transition-all">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">What is the validity period of a DSC?</h3>
                    <p className="text-gray-600">
                      The standard validity period for a DSC is 2 years from the date of issuance. After expiry, you will need
                      to apply for a new DSC.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Consult Us Section */}
              <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
                    Consult Us – Expert Help is One Step Away
                  </h2>
                  <p className="text-xl text-gray-700 text-center mb-8">
                    <strong>Confused by legal, taxation, or compliance issues?</strong> Let <em>Kamal Legal FinTax Pro Solution</em> guide you. Our seasoned professionals provide expert consultation services to help you tackle complex legal matters, stay compliant, and plan your financials—all tailored to your business goals.
                  </p>

                  {/* Services */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
                      Services You Can Consult Us For
                    </h3>
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>GST Registration & Return Filing</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>Income Tax Return (ITR) for Individuals & Companies</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>Company Formation (Pvt Ltd, LLP, OPC, Partnership)</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>TDS, PF, ESI & Payroll Management</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>Licensing: Trademark, FSSAI, ISO, IEC</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>ROC Filing & Corporate Compliance</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>Import-Export Certification</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>MSME & Startup India Registration</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0" />
                          <span>Tax Notices, Legal Advice & Dispute Resolution</span>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>

                {/* Book a Consultation Form */}
                <div className="bg-white border border-indigo-100 rounded-lg p-8 mt-8">
                  <h3 className="text-xl font-bold text-indigo-800 mb-6">Book a Consultation</h3>
                  <form onSubmit={handleConsultSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="consultName" className="block text-gray-700 font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="consultName"
                          name="consultName"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="consultEmail" className="block text-gray-700 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="consultEmail"
                          name="consultEmail"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="consultPhone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="consultPhone"
                          name="consultPhone"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="consultService" className="block text-gray-700 font-medium mb-2">
                          Service You Need Help With
                        </label>
                        <select
                          id="consultService"
                          name="consultService"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          required
                        >
                          <option value="">Select a Service</option>
                          <option value="gst">GST Registration & Returns</option>
                          <option value="itr">Income Tax Returns</option>
                          <option value="company">Company Formation</option>
                          <option value="tds">TDS & Payroll</option>
                          <option value="licensing">Licensing</option>
                          <option value="roc">ROC Filing</option>
                          <option value="import">Import-Export</option>
                          <option value="msme">MSME Registration</option>
                          <option value="legal">Legal Advice</option>
                          <option value="dsc">Digital Signature Certificate</option>
                          <option value="other">Other Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="consultMessage" className="block text-gray-700 font-medium mb-2">
                        Your Message or Query
                      </label>
                      <textarea
                        id="consultMessage"
                        name="consultMessage"
                        rows="4"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-indigo-600"
                          required
                        />
                        <span className="ml-2 text-gray-700">
                          I agree to be contacted regarding my inquiry
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all font-medium text-lg"
                    >
                      Book Consultation
                    </button>
                  </form>
                </div>

                {/* Why Choose Us */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
                    Why Choose Our Consultation Services
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                      <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Award className="text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-indigo-800 mb-2">Experienced Professionals</h4>
                      <p className="text-gray-700">
                        Our team consists of CA, CS, and legal experts with over 15 years of industry experience
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                      <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <CheckCircle className="text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-indigo-800 mb-2">Customized Solutions</h4>
                      <p className="text-gray-700">
                        We develop solutions tailored to your specific business needs and challenges
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                      <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Clock className="text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-indigo-800 mb-2">Quick Turnaround</h4>
                      <p className="text-gray-700">
                        Get solutions quickly with our efficient and responsive consultation process
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
                    What Our Clients Say
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <p className="text-gray-700 italic mb-4">
                        "The team at Kamal Legal FinTax Pro Solution helped us navigate complex tax regulations and saved us valuable time and resources. Their expertise has been invaluable to our business."
                      </p>
                      <p className="font-semibold text-indigo-800">- Rajesh Kumar, Small Business Owner</p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <p className="text-gray-700 italic mb-4">
                        "I approached them for GST compliance issues and received exceptional guidance. Their consultation helped us avoid penalties and streamline our filing process."
                      </p>
                      <p className="font-semibold text-indigo-800">- Priya Sharma, Startup Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default BuyDSCPage