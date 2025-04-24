"use client"

import React, { useState } from "react"
import { CheckCircle } from "lucide-react"

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

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Buy Digital Signature Certificate (DSC)
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get your Digital Signature Certificate quickly and hassle-free. We provide end-to-end assistance for DSC
          application and delivery.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Choose Your DSC Type</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dscTypes.map((dsc) => (
            <div
              key={dsc.id}
              className={`border rounded-lg p-6 transition-all ${
                selectedDSC === dsc.id
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200 hover:border-blue-300 hover:shadow-md"
              } ${dsc.recommended ? "relative" : ""}`}
            >
              {dsc.recommended && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
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
                  className={`px-4 py-2 rounded-full font-medium ${
                    selectedDSC === dsc.id
                      ? "bg-blue-600 text-white"
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

      {selectedDSC && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Complete Your Order</h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-4">Required Documents:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Scanned copy of PAN Card</li>
                <li>Scanned copy of Aadhar Card</li>
                <li>Passport size photograph</li>
                <li>Mobile number linked with Aadhar for OTP verification</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">
                Note: You will need to upload these documents after placing the order.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Place Order
            </button>
          </form>
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What is a Digital Signature Certificate (DSC)?</h3>
            <p className="text-gray-600">
              A Digital Signature Certificate (DSC) is an electronic form of signature that helps you sign your
              documents digitally. It ensures the authenticity of the signer and prevents tampering of documents.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What is the difference between Class 2 and Class 3 DSC?
            </h3>
            <p className="text-gray-600">
              Class 2 DSC provides medium level of security and is used for e-filing of income tax returns, ROC filings,
              etc. Class 3 DSC provides high level of security and is used for e-tendering, e-procurement, and other
              applications requiring higher security.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does it take to get a DSC?</h3>
            <p className="text-gray-600">
              Once all the required documents are submitted and verified, it typically takes 1-2 working days to issue a
              DSC. The physical token (if required) will be delivered within 3-5 working days.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What is the validity period of a DSC?</h3>
            <p className="text-gray-600">
              The standard validity period for a DSC is 2 years from the date of issuance. After expiry, you will need
              to apply for a new DSC.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyDSCPage
