import { Link } from "react-router-dom"
import Button from "../ui/Button"

const HeroSection = () => {
  return (
    <div className="relative hero-gradient text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl">"Practical Learning Means FinTaxPro"</p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Learn Practical Working Skills With Our Courses
            </h2>

            <div className="text-sm md:text-base">
              <p>
                GST | Income Tax | TDS | Tally | ROC | Trademark | Accounting | Excel | Share Market Taxation | Account
                Finalization | Project Report
              </p>
            </div>

            <div>
              <Link to="/courses">
                <Button className="group">
                  CHECK COURSES
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
              </Link>
            </div>
          </div>

          {/* Right Column - Course Banner */}
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-lg overflow-hidden border-4 border-yellow-400 shadow-xl max-w-md">
              <img src="/images/course-banner.png" alt="Practical Course in GST ITR TDS" className="w-full h-auto" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-600"
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
          </div>
        </div>
      </div>

      {/* Wave Shape */}
      <div className="wave-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default HeroSection
