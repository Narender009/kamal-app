"use client";

import React, { useState, useEffect } from "react";
import { Mail, Bell, BookOpen, CheckCircle, Users, Shield, Phone, MessageCircle, Star, Zap, Award, TrendingUp } from "lucide-react";
import NewsletterHeader from "../components/layout/NewsletterHeader";

const NewsletterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    city: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Animate subscriber count
    const interval = setInterval(() => {
      setSubscriberCount(prev => {
        if (prev < 2847) return prev + 23;
        clearInterval(interval);
        return 2847;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for subscribing! You will receive our newsletter soon.');
    setFormData({ name: '', email: '', businessType: '', city: '' });
  };

  return (
    <>
      <NewsletterHeader />
      
      {/* Animated Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-20 h-20 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-red-400 rounded-full animate-pulse"></div>
        </div>
        
        <div className={`max-w-6xl mx-auto px-6 text-center relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 animate-spin-slow">
                <CheckCircle size={48} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full w-6 h-6 animate-bounce"></div>
            </div>
          </div>
          
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              ✨ PREMIUM NEWSLETTER
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            Newsletter – Full Page Content
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8 animate-slide-up">
            <div className="bg-yellow-400 rounded-full p-2 animate-bounce">
              <Mail className="text-gray-900" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Subscribe to Our Newsletter
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            Empowering You with Knowledge for Smarter Business Decisions
          </p>
          
          {/* Subscriber Count */}
          <div className="flex justify-center items-center gap-4 text-lg">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full border-2 border-white flex items-center justify-center">
                  <Users size={16} className="text-white" />
                </div>
              ))}
            </div>
            <span className="text-yellow-300 font-semibold">
              Join {subscriberCount.toLocaleString()}+ subscribers
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Introduction with enhanced styling */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 mb-16 border-l-8 border-gradient-to-b from-blue-500 to-purple-600 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
                  <Award className="text-white" size={24} />
                </div>
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">ABOUT US</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                At <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Kamal Legal FinTax Pro Solution</span>, we believe that staying informed is the first step toward compliance and business success. Our newsletter brings you curated insights, timely updates, and expert tips across the fields of taxation, company law, legal compliance, and business registration.
              </p>
            </div>
          </div>

          {/* Enhanced What You'll Get Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 animate-pulse">
                <BookOpen className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">What You'll Get</h3>
                <p className="text-gray-600">Premium content delivered to your inbox</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "📊", title: "Taxation Updates", desc: "Changes in GST, Income Tax, and TDS laws", color: "from-blue-500 to-cyan-500" },
                { icon: "⚠️", title: "Compliance Alerts", desc: "ROC deadlines, filing reminders, and statutory obligations", color: "from-red-500 to-pink-500" },
                { icon: "💡", title: "Business Tips", desc: "Guidance on registration, payroll, and certifications", color: "from-yellow-500 to-orange-500" },
                { icon: "⚖️", title: "Legal Insights", desc: "Simplified legal concepts and policy updates", color: "from-purple-500 to-indigo-500" },
                { icon: "🎁", title: "Exclusive Offers", desc: "Special discounts on our services for subscribers", color: "from-green-500 to-emerald-500" }
              ].map((item, index) => (
                <div key={index} className={`group relative bg-gradient-to-r ${item.color} p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2 flex-shrink-0">
                        <CheckCircle size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-white text-opacity-90 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Who Should Subscribe Section */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl shadow-2xl p-10 mb-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white rounded-full p-3 animate-bounce">
                  <Users className="text-purple-600" size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Who Should Subscribe?</h3>
                  <p className="text-pink-100">Perfect for professionals and businesses</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { role: "Startup Founders & Business Owners", icon: "🚀" },
                  { role: "Accountants & Tax Professionals", icon: "📊" },
                  { role: "Legal Advisors & Compliance Officers", icon: "⚖️" },
                  { role: "Freelancers & Consultants", icon: "💼" },
                  { role: "Anyone interested in staying compliant and informed", icon: "📚" }
                ].map((item, index) => (
                  <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-yellow-300 flex-shrink-0 mt-1" />
                      <span className="font-medium text-black">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Why Subscribe Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-2xl p-10 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-200 rounded-full -translate-y-20 translate-x-20 opacity-50"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3 animate-pulse">
                <Shield className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">Why Subscribe?</h3>
                <p className="text-gray-600">Benefits that make a difference</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { benefit: "Stay Ahead of Regulatory Changes", icon: TrendingUp },
                { benefit: "Avoid Penalties with Timely Alerts", icon: Bell },
                { benefit: "Gain Actionable Business Insights", icon: Zap },
                { benefit: "Learn from Experts in Law & Finance", icon: Award },
                { benefit: "100% Free – No Spam, Just Value", icon: Star }
              ].map((item, index) => (
                <div key={index} className="group flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 group-hover:animate-bounce">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">{item.benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Subscription Form Section */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl shadow-2xl p-10 mb-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 opacity-10"></div>
            
            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-float-delayed"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                  🎯 LIMITED TIME OFFER
                </div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  📝 Join the Kamal Legal FinTax Pro Community
                </h3>
                <p className="text-xl text-blue-100">Subscribe in Seconds – Just provide your details, and you're in!</p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Star size={16} className="text-yellow-400" />
                      Name *
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border-2 border-transparent text-gray-800 focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Mail size={16} className="text-yellow-400" />
                      Email *
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border-2 border-transparent text-gray-800 focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Users size={16} className="text-yellow-400" />
                      Business Type
                    </div>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border-2 border-transparent text-gray-800 focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg"
                    >
                      <option value="">Select your business type</option>
                      <option value="startup">Startup</option>
                      <option value="small-business">Small Business</option>
                      <option value="accounting-firm">Accounting Firm</option>
                      <option value="legal-firm">Legal Firm</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="consultant">Consultant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Shield size={16} className="text-yellow-400" />
                      City (Optional)
                    </div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border-2 border-transparent text-gray-800 focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 text-lg"
                      placeholder="Your city"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      🚀 Subscribe Now - It's Free!
                      <div className="group-hover:animate-bounce">
                        <CheckCircle size={24} />
                      </div>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <p className="text-blue-200 text-sm mt-4">
                    🔒 Your data is secure. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold mb-4">
                  📧 GET IN TOUCH
                </div>
                <h3 className="text-3xl font-bold mb-4">Contact for Queries</h3>
                <p className="text-xl text-gray-300 mb-8">Have questions or want to contribute?</p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a 
                  href="mailto:kamalray.1992@gmail.com"
                  className="group flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
                >
                  <div className="bg-white bg-opacity-20 rounded-full p-2 group-hover:animate-bounce">
                    <Mail size={24} />
                  </div>
                  <span className="font-semibold text-lg">kamalray.1992@gmail.com</span>
                </a>
                <a 
                  href="tel:+919990778501"
                  className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl"
                >
                  <div className="bg-white bg-opacity-20 rounded-full p-2 group-hover:animate-bounce">
                    <Phone size={24} />
                  </div>
                  <span className="font-semibold text-lg">+91 9990778501</span>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center py-16">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Let Knowledge Be Your Competitive Edge – Subscribe Today!
              </h2>
              <div className="flex items-center justify-center gap-3 text-2xl text-white">
                <div className="bg-blue-500 rounded-full p-3 animate-pulse">
                  <Mail size={32} />
                </div>
                <span>Be informed. Be compliant. Be ahead.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default NewsletterPage;