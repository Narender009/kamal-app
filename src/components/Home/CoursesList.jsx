import { Link } from "react-router-dom"

const courses = [
  {
    id: 1,
    title: "GST Course",
    description: "Learn practical aspects of GST filing, returns, and compliance.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Income Tax & ITR",
    description: "Master income tax calculations and ITR filing for individuals and businesses.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "TDS Course",
    description: "Understand TDS provisions, calculations, and filing procedures.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Tally Prime",
    description: "Learn accounting and financial management using Tally Prime software.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const CoursesList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Popular Courses</h2>
          <p className="text-gray-600 mt-2">Practical courses designed for real-world applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link
                  to={`/courses/${course.id}`}
                  className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
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
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            View All Courses
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesList
