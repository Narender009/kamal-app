import React from "react"
import { CheckCircle } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Practical Learning",
    description: "Our courses focus on real-world applications with practical examples and case studies.",
    icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 2,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in finance and taxation.",
    icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 3,
    title: "Lifetime Access",
    description: "Get lifetime access to course materials and updates with a one-time payment.",
    icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 4,
    title: "Certificate of Completion",
    description: "Receive a certificate upon course completion to enhance your professional profile.",
    icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 5,
    title: "Dedicated Support",
    description: "Get your queries resolved with our dedicated support team and instructor assistance.",
    icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
  },
  {
    id: 6,
    title: "Updated Content",
    description: "Course content is regularly updated to reflect the latest regulations and practices.",
    icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900">Why Choose KamalTaxPro?</h2>
          <p className="text-indigo-600 mt-2 md:text-lg">We offer the best practical learning experience in finance and taxation</p>
        </div>
        
        {/* Improved grid layout with better responsive breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="p-4 md:p-6 bg-white border border-purple-100 rounded-lg hover:shadow-lg transition-shadow transform hover:-translate-y-1 hover:border-amber-300 duration-300 h-full"
            >
              <div className="mb-3 md:mb-4 bg-indigo-50 p-2 md:p-3 inline-block rounded-full">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-indigo-800 mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-indigo-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Repositioned decorative elements for better laptop view */}
      <div className="hidden lg:block absolute right-0 top-1/3 transform translate-x-1/4">
        <div className="w-32 h-32 rounded-full bg-indigo-100 opacity-20"></div>
      </div>
      <div className="hidden lg:block absolute left-0 bottom-1/3 transform -translate-x-1/4">
        <div className="w-24 h-24 rounded-full bg-amber-100 opacity-20"></div>
      </div>
      
      {/* Additional decorative dots for visual interest */}
      <div className="hidden md:block absolute top-20 left-1/4">
        <div className="w-4 h-4 rounded-full bg-amber-300 opacity-30"></div>
      </div>
      <div className="hidden md:block absolute bottom-16 right-1/3">
        <div className="w-6 h-6 rounded-full bg-indigo-300 opacity-20"></div>
      </div>
    </section>
  )
}

export default FeaturesSection