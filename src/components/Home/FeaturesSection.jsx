import React from "react"
import { CheckCircle } from "lucide-react"

const features = [
  
    {
      id: 1,
      title: "Comprehensive Services",
      description: "From GST and income tax to business registration and legal compliance — we cover it all under one roof.",
      icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 2,
      title: "Experienced Professionals",
      description: "Work with seasoned experts in legal, taxation, and corporate compliance for accurate and effective solutions.",
      icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 3,
      title: "Tailored Solutions",
      description: "Get business-specific strategies designed to meet your unique financial and compliance requirements.",
      icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 4,
      title: "End-to-End Support",
      description: "From consultation to execution, we assist you through every step of your business journey.",
      icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 5,
      title: "Transparent & Hassle-Free Process",
      description: "Our streamlined process ensures you stay informed and in control without any hidden hurdles.",
      icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
    },
    {
      id: 6,
      title: "Trusted by Businesses",
      description: "A preferred partner for startups, MSMEs, and enterprises across India for legal and financial services.",
      icon: <CheckCircle className="h-8 w-8 text-amber-500" />,
    },
  ]
  

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900">Why Choose KamalTaxPro?</h2>
          <p className="text-indigo-600 mt-2 md:text-lg">
            Expert legal, tax, and compliance services tailored to support your business growth with confidence.
          </p>

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