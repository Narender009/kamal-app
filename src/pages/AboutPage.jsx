import React from "react"
import { Users, Award, BookOpen, Clock, MapPin, Phone, Mail, Star, TrendingUp, Shield, Zap } from "lucide-react"
import AboutHeader from "../components/layout/AboutHeader"

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kamal Kumar Rai",
      role: "Founder & CEO",
      bio: "Chartered Accountant with over 15 years of experience in taxation and finance.",
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Training",
      bio: "Taxation expert with extensive experience in GST and Income Tax training.",
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Senior Consultant",
      bio: "Specializes in corporate compliance and company law matters.",
      image: "/api/placeholder/300/300",
    },
  ]

  const stats = [
    { number: "5000+", label: "Students Trained", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Courses Available", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
  ]

  return (
    <>
    <AboutHeader />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-10 -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-indigo-500 rounded-full opacity-10 top-1/2 -right-20 animate-pulse delay-1000"></div>
          <div className="absolute w-48 h-48 bg-purple-500 rounded-full opacity-10 bottom-10 left-1/3 animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            About KamalTaxPro
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Empowering professionals with practical education and expert services in finance, taxation, and accounting since 2015
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-500 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">The journey that shaped our mission</p>
          </div>
          
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-4">
            Kamal Legal FinTax Pro Solution was founded in 2015 with a simple mission: to make financial and taxation knowledge accessible and
            practical for everyone. We noticed a significant gap between theoretical education and real-world
            applications in finance and taxation.
          </p>
          <p className="text-gray-600 mb-4">
            Our founder, Rajesh Kumar, a Chartered Accountant with extensive experience, realized that many
            professionals and students struggled with applying their knowledge in practical scenarios. This led to the
            creation of Kamal Legal FinTax Pro Solution, where we focus on practical learning through real-world case studies and hands-on
            training.
          </p>
          <p className="text-gray-600">
            Today, Kamal Legal FinTax Pro Solution has helped thousands of students and professionals master practical skills in GST, Income
            Tax, TDS, Accounting, and more. We continue to expand our offerings to meet the evolving needs of our
            students and clients.
          </p>
        </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full opacity-20 -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower individuals and businesses with practical knowledge and skills in finance, taxation, and accounting through high-quality education and professional services that make a real difference.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-200 rounded-full opacity-20 -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading provider of practical financial education and services, recognized globally for excellence, innovation, and real-world relevance in all our offerings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Sets Us Apart</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Discover the advantages that make us different</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Practical Learning", desc: "Real-world applications with practical examples and case studies that prepare you for actual work scenarios.", color: "from-blue-500 to-blue-600" },
              { icon: Users, title: "Expert Instructors", desc: "Learn from industry professionals with years of hands-on experience in finance and taxation.", color: "from-green-500 to-green-600" },
              { icon: Clock, title: "Lifetime Access", desc: "Get lifetime access to course materials and updates with a one-time investment in your future.", color: "from-purple-500 to-purple-600" },
              { icon: Award, title: "Certification", desc: "Receive industry-recognized certificates upon completion to enhance your professional profile.", color: "from-orange-500 to-orange-600" }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">The experts behind your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Ready to start your journey with us?</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "Our Office", info: "123 Finance Street, New Delhi, India", color: "from-blue-500 to-blue-600" },
                { icon: Phone, title: "Phone", info: "+91 9990778501", color: "from-green-500 to-green-600" },
                { icon: Mail, title: "Email", info: "kamalray.1992@gmail.com", color: "from-purple-500 to-purple-600" }
              ].map((contact, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{contact.title}</h3>
                    <p className="text-gray-600 text-lg">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default AboutPage