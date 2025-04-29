import React from "react"

const courses = [
  {
    id: 1,
    title: "GST Course",
    description: "Learn practical aspects of GST filing, returns, and compliance.",
    image: "/api/placeholder/300/200",
  },
  {
    id: 2,
    title: "Income Tax & ITR",
    description: "Master income tax calculations and ITR filing for individuals and businesses.",
    image: "/api/placeholder/300/200",
  },
  {
    id: 3,
    title: "TDS Course",
    description: "Understand TDS provisions, calculations, and filing procedures.",
    image: "/api/placeholder/300/200",
  },
  {
    id: 4,
    title: "Tally Prime",
    description: "Learn accounting and financial management using Tally Prime software.",
    image: "/api/placeholder/300/200",
  },
]

const CoursesList = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900">Our Popular Courses</h2>
          <p className="text-indigo-600 mt-2">Practical courses designed for real-world applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-amber-300"
            >
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-50 hover:opacity-70 transition-opacity"></div>
              </div>
              
              <div className="p-6 border-t-4 border-amber-400">
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{course.title}</h3>
                <p className="text-indigo-600 mb-4">{course.description}</p>
                <a
                  href={`/courses/${course.id}`}
                  className="text-amber-500 font-medium hover:text-amber-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/courses"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-medium rounded-full hover:from-indigo-800 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
          >
            View All Courses
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-300 opacity-5"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-500 opacity-5"></div>
    </section>
  )
}

export default CoursesList