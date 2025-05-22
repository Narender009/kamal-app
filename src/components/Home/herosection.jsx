import React from "react"

const Button = ({ children, className = "" }) => {
  return (
    <button className={`bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition-all flex items-center ${className}`}>
      {children}
    </button>
  )
}

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-800 via-purple-700 to-violet-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-amber-300 font-medium">Welcome to Kamal Legal FinTax  Pro Solution</p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Simplifying Legal, Tax & Business Compliance For Your Growth
            </h2>


            <div className="text-sm md:text-base text-purple-100">
              <p>
              Company Registration | Accounting | GST Filing | Income Tax | TDS | PF & ESIC | Import & Export Certificate | Trademark | MSME Certificate | Aadhar Udham Registration | Tax Audit & Planning | ROC Filing | Part time & Freelance Accountant Available
              </p>
            </div>

            <div>
              <a href="/services">
                <Button className="group">
                  CHECK SERVICES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          
          {/* <div className="flex justify-center md:justify-end">
            <div className="relative rounded-lg overflow-hidden border-4 border-amber-400 shadow-xl max-w-md transform hover:scale-102 transition-transform duration-300">
              <img src="/api/placeholder/600/400" alt="Practical Course in GST ITR TDS" className="w-full h-auto" />

              
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all transform hover:scale-110"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-indigo-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Add animated gradient dots */}
      <div className="absolute  top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-4 h-4 rounded-full bg-amber-300 opacity-20 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-6 h-6 rounded-full bg-purple-300 opacity-20 top-3/4 left-1/2 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute w-3 h-3 rounded-full bg-indigo-300 opacity-20 top-1/3 left-3/4 animate-pulse" style={{animationDelay: "2s"}}></div>
      </div>
    </div>
  )
}

export default HeroSection