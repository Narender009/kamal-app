import { Link } from "react-router-dom"
import { ArrowRight, Clock, Award, Users } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "GST Course",
    description: "Learn practical aspects of GST filing, returns, and compliance.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "30 Hours",
    students: "1,200+",
    level: "Beginner to Advanced",
    price: "₹4,999",
    features: [
      "GST Registration Process",
      "GSTR Filing",
      "Input Tax Credit",
      "E-way Bill",
      "GST Refunds",
      "Case Studies",
    ],
  },
  {
    id: 2,
    title: "Income Tax & ITR",
    description: "Master income tax calculations and ITR filing for individuals and businesses.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "25 Hours",
    students: "950+",
    level: "Beginner to Advanced",
    price: "₹4,499",
    features: [
      "Income Tax Basics",
      "Tax Planning",
      "ITR Filing",
      "TDS Compliance",
      "Tax Saving Investments",
      "Case Studies",
    ],
  },
  {
    id: 3,
    title: "TDS Course",
    description: "Understand TDS provisions, calculations, and filing procedures.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "20 Hours",
    students: "800+",
    level: "Beginner to Intermediate",
    price: "₹3,999",
    features: ["TDS Provisions", "TDS Calculations", "TDS Returns", "TDS Certificates", "TDS Refunds", "Case Studies"],
  },
  {
    id: 4,
    title: "Tally Prime",
    description: "Learn accounting and financial management using Tally Prime software.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "35 Hours",
    students: "1,500+",
    level: "Beginner to Advanced",
    price: "₹5,499",
    features: [
      "Company Creation",
      "Ledger Management",
      "Inventory Management",
      "GST in Tally",
      "Financial Reports",
      "Case Studies",
    ],
  },
  {
    id: 5,
    title: "ROC Compliance",
    description: "Learn about company registration and ROC compliance requirements.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "22 Hours",
    students: "650+",
    level: "Intermediate",
    price: "₹4,299",
    features: [
      "Company Registration",
      "Annual Filings",
      "Director KYC",
      "Form Filing",
      "Compliance Calendar",
      "Case Studies",
    ],
  },
  {
    id: 6,
    title: "Excel for Finance",
    description: "Master Excel for financial analysis, reporting, and data management.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "28 Hours",
    students: "1,100+",
    level: "Beginner to Advanced",
    price: "₹3,799",
    features: [
      "Excel Basics",
      "Financial Functions",
      "Data Analysis",
      "Pivot Tables",
      "Financial Dashboards",
      "Case Studies",
    ],
  },
]

const CoursesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Practical courses designed to help you master finance, taxation, and accounting skills with real-world
          applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students} Students
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-1" />
                  {course.level}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">What you'll learn:</h4>
                <ul className="space-y-1">
                  {course.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mt-6">
                <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoursesPage
