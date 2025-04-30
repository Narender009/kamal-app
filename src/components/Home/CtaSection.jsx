import React from "react"
import { ArrowRight, BookOpen } from "lucide-react"

// Custom button component since we don't have the imported Button
const CustomButton = ({ children, variant = "primary", className = "", href = "#", onClick }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-white hover:bg-indigo-50 text-indigo-700 hover:text-indigo-800 shadow-lg",
    secondary: "bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-300 shadow-md hover:shadow-lg"
  };
  
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-800 via-purple-700 to-indigo-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-500 opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-indigo-400 opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-indigo-300 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-2">
          <span className="bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full">Limited Time Offer</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
          Ready to Begin Your <span className="text-indigo-200">GST & Taxation Journey</span>?
        </h2>

        <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
          Join thousands of businesses who have streamlined their operations with our expert legal, taxation, and compliance solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton 
            href="/courses" 
            className="min-w-[180px]"
          >
            <BookOpen size={18} className="mr-2" />
            Explore Services
          </CustomButton>
          
          <CustomButton 
            variant="secondary" 
            href="/consult-us" 
            className="min-w-[180px]"
          >
            Get Free Consultation
            <ArrowRight size={18} className="ml-2" />
          </CustomButton>
        </div>
        <p className="text-indigo-200 mt-6 text-sm">No credit card required • 7-day free trial available</p>
      </div>
    </section>
  )
}

export default CtaSection