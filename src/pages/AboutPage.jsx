import { Users, Award, BookOpen, Clock, MapPin, Phone, Mail } from "lucide-react"

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "Chartered Accountant with over 15 years of experience in taxation and finance.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Training",
      bio: "Taxation expert with extensive experience in GST and Income Tax training.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Senior Consultant",
      bio: "Specializes in corporate compliance and company law matters.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About KamalTaxPro</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are dedicated to providing practical education and professional services in finance, taxation, and
          accounting.
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-4">
            FinTaxPro was founded in 2015 with a simple mission: to make financial and taxation knowledge accessible and
            practical for everyone. We noticed a significant gap between theoretical education and real-world
            applications in finance and taxation.
          </p>
          <p className="text-gray-600 mb-4">
            Our founder, Rajesh Kumar, a Chartered Accountant with extensive experience, realized that many
            professionals and students struggled with applying their knowledge in practical scenarios. This led to the
            creation of FinTaxPro, where we focus on practical learning through real-world case studies and hands-on
            training.
          </p>
          <p className="text-gray-600">
            Today, FinTaxPro has helped thousands of students and professionals master practical skills in GST, Income
            Tax, TDS, Accounting, and more. We continue to expand our offerings to meet the evolving needs of our
            students and clients.
          </p>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower individuals and businesses with practical knowledge and skills in finance, taxation, and
            accounting through high-quality education and professional services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading provider of practical financial education and services, recognized for excellence,
            innovation, and real-world relevance in all our offerings.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">What Sets Us Apart</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical Learning</h3>
            <p className="text-gray-600">
              Our courses focus on real-world applications with practical examples and case studies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry professionals with years of experience in finance and taxation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lifetime Access</h3>
            <p className="text-gray-600">
              Get lifetime access to course materials and updates with a one-time payment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Certification</h3>
            <p className="text-gray-600">
              Receive a certificate upon course completion to enhance your professional profile.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Us</h2>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h3>
              <p className="text-gray-600">123 Finance Street, New Delhi, India</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 7827521794</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@fintaxpro.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
