import React from "react"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Practical Learning",
    description: "Our courses focus on real-world applications with practical examples and case studies.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in finance and taxation.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Lifetime Access",
    description: "Get lifetime access to course materials and updates with a one-time payment.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 4,
    title: "Certificate of Completion",
    description: "Receive a certificate upon course completion to enhance your professional profile.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 5,
    title: "Dedicated Support",
    description: "Get your queries resolved with our dedicated support team and instructor assistance.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 6,
    title: "Updated Content",
    description: "Course content is regularly updated to reflect the latest regulations and practices.",
    icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose FinTaxPro?</h2>
          <p className="text-gray-600 mt-2">We offer the best practical learning experience in finance and taxation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
