"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Calendar, CheckCircle, ArrowRight, Clock, Globe } from "lucide-react";
import ConsultHeader from "../components/layout/ConsultHeader";

const ConsultPage = () => {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await response.json();
      alert("Consultation request sent successfully! We'll contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        preferredDate: "",
        preferredTime: ""
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const serviceOptions = [
    "GST Registration & Filing",
    "Income Tax Return Filing",
    "TDS, PF, ESI & Payroll Compliance",
    "Business Formation & Registration",
    "Trademark & Licensing",
    "Company Law & ROC Filings",
    "Import-Export Certification",
    "Corporate Legal Support",
    "Startup India & MSME Registration",
    "Other"
  ];

  return (
    <>
      <ConsultHeader />
      
      {/* Main Content with enhanced background */}
      <div className="bg-gradient-to-b from-sky-50 via-teal-50 to-white relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-64 h-64 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-96 right-20 w-80 h-80 bg-indigo-100 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          
          {/* Introduction Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block p-2 px-4 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 font-medium rounded-full mb-4 shadow-sm">
              <Phone className="w-4 h-4 inline mr-2" />
              Get Professional Guidance Today
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Looking for legal, tax, or compliance assistance?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              You're in the right place. At <span className="font-semibold text-teal-700">Kamal Legal FinTax Pro Solution</span>, 
              we offer expert consultations to help you understand the right path for your business goals. Whether you're an individual, 
              startup, or established company, we provide customized advice and practical solutions that save your time, reduce risks, 
              and ensure full legal and financial compliance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-teal-800 mb-8 text-center">
              <span className="border-b-4 border-teal-400 pb-2">What You Can Consult Us For</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "GST Registration & Filing Guidance", icon: "📊" },
                { title: "Income Tax Return Filing", icon: "💰" },
                { title: "TDS, PF, ESI & Payroll Compliance", icon: "📝" },
                { title: "Business Formation & Registration", icon: "🏢" },
                { title: "Trademark & Licensing Assistance", icon: "®️" },
                { title: "Company Law & ROC Filings", icon: "⚖️" },
                { title: "Import-Export Certification", icon: "🌐" },
                { title: "Mergers & Corporate Legal Support", icon: "🤝" },
                { title: "Startup India & MSME Registration", icon: "🚀" }
              ].map((service, index) => (
                <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-teal-500 group hover:bg-gradient-to-r hover:from-white hover:to-teal-50">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-2xl p-8 mb-20 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Why Book a Consultation with Us?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                "Expert Legal & Tax Professionals",
                "Personalized, Action-Oriented Advice",
                "Affordable & Transparent Fees",
                "Solutions for All Business Sizes",
                "Fast, Confidential & Reliable Service"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center bg-white bg-opacity-10 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-teal-300 mr-2 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        

          {/* How to Schedule Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              <span className="border-b-4 border-teal-400 pb-2">How to Schedule Your Consultation</span>
            </h3>
            
            <p className="text-center text-lg mb-10">
              We offer flexible consultation modes—<span className="font-semibold">Phone, Email, or Video Call</span>—based on your convenience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "Step 1",
                  title: "Contact us",
                  description: "Reach out via call or email",
                  icon: <Phone className="w-6 h-6 text-teal-600" />
                },
                {
                  step: "Step 2",
                  title: "Describe your needs",
                  description: "Briefly explain your query or requirement",
                  icon: <Mail className="w-6 h-6 text-teal-600" />
                },
                {
                  step: "Step 3",
                  title: "Get scheduled",
                  description: "Receive a consultation time with our experts",
                  icon: <Calendar className="w-6 h-6 text-teal-600" />
                },
                {
                  step: "Step 4",
                  title: "Receive insights",
                  description: "Get actionable advice and next steps",
                  icon: <ArrowRight className="w-6 h-6 text-teal-600" />
                }
              ].map((step, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-sky-50 p-6 rounded-xl shadow-md text-center border-t-4 border-teal-500 hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 mb-4">
                    {step.icon}
                  </div>
                  <div className="font-bold text-teal-700 mb-1">{step.step}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact and Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white rounded-xl p-8 h-full shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 flex-shrink-0 text-teal-300" />
                    <div>
                      <h4 className="font-semibold text-teal-100">Call Us</h4>
                      <p className="text-white">+91 9990778501</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 flex-shrink-0 text-teal-300" />
                    <div>
                      <h4 className="font-semibold text-teal-100">Email</h4>
                      <p className="text-white">kamalray.1992@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 flex-shrink-0 text-teal-300" />
                    <div>
                      <h4 className="font-semibold text-teal-100">Working Hours</h4>
                      <p className="text-white">Monday – Saturday | 10 AM – 6 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 flex-shrink-0 text-teal-300" />
                    <div>
                      <h4 className="font-semibold text-teal-100">Location</h4>
                      <p className="text-white">New Delhi, India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="w-6 h-6 mr-4 flex-shrink-0 text-teal-300" />
                    <div>
                      <h4 className="font-semibold text-teal-100">Website</h4>
                      <p className="text-white">www.kamaltaxpro.in</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="font-semibold mb-4 text-teal-100">Follow Us</h4>
                  <div className="flex space-x-4">
                    {/* Social icons */}
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors hover:scale-110">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors hover:scale-110">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors hover:scale-110">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-8">
                  Use the form below to schedule a consultation with our experts. We're committed to helping you manage 
                  your legal and financial obligations with ease.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-gray-700 font-medium mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-gray-700 font-medium mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select a time</option>
                        <option value="10AM-12PM">10 AM - 12 PM</option>
                        <option value="12PM-2PM">12 PM - 2 PM</option>
                        <option value="2PM-4PM">2 PM - 4 PM</option>
                        <option value="4PM-6PM">4 PM - 6 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                      placeholder="Briefly describe your requirements or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-4 px-6 rounded-lg hover:from-teal-700 hover:to-cyan-800 transition-all font-medium text-lg shadow-md"
                  >
                    Schedule Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">🤝 Let's Grow Together</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We're committed to helping you manage your legal and financial obligations with ease. 
              Whether you're just starting out or scaling up, <span className="font-semibold text-teal-700">Kamal Legal FinTax Pro Solution</span> is 
              here to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultPage;