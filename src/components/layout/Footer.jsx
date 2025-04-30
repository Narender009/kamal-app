import React from "react"
import { Mail, Phone, Globe, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  // Custom Link component to replace react-router-dom's Link
  const CustomLink = ({ href, children, className }) => (
    <a 
      href={href} 
      className={`text-indigo-100 hover:text-white transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
  
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Logo and company info */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">KamalFinTax</h2>
            <div className="h-1 w-full bg-purple-400 rounded mb-4"></div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-indigo-800 hover:bg-indigo-700 p-2 rounded-full transition-colors duration-300">
              <Facebook size={20} className="text-white" />
            </a>
            <a href="#" className="bg-indigo-800 hover:bg-indigo-700 p-2 rounded-full transition-colors duration-300">
              <Twitter size={20} className="text-white" />
            </a>
            <a href="#" className="bg-indigo-800 hover:bg-indigo-700 p-2 rounded-full transition-colors duration-300">
              <Instagram size={20} className="text-white" />
            </a>
            <a href="#" className="bg-indigo-800 hover:bg-indigo-700 p-2 rounded-full transition-colors duration-300">
              <Linkedin size={20} className="text-white" />
            </a>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-indigo-700 pb-8">
        <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Company</h3>
            <ul className="space-y-3">
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/courses">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    About us
                  </span>
                </CustomLink>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/services">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Privacy Policy
                  </span>
                </CustomLink>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/consult-us">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Terms & Conditions
                  </span>
                </CustomLink>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/about-us">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Refund Policy
                  </span>
                </CustomLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h3>
            <ul className="space-y-3">
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/courses">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Courses
                  </span>
                </CustomLink>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/services">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Services
                  </span>
                </CustomLink>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/consult-us">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Consult Us
                  </span>
                </CustomLink>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-2">
                <CustomLink href="/about-us">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    About Us
                  </span>
                </CustomLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="text-purple-400 mr-3" />
                <span className="text-indigo-100">+91 9990778501</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-purple-400 mr-3" />
                <CustomLink href="mailto:info@Kamaltaxpro.in">Kamalray.1992@gmail.com</CustomLink>
              </li>
              <li className="flex items-center">
                <Globe size={16} className="text-purple-400 mr-3" />
                <CustomLink href="https://Kamaltaxpro.in">KamalLegalFinTax.in</CustomLink>
              </li>
              <li className="flex items-start mt-4">
                <MapPin size={16} className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-indigo-100">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-indigo-200">
            © {new Date().getFullYear()} KamalTaxPro. All rights reserved.
          </p>
          <div className="mt-3 flex justify-center space-x-4 text-sm">
            <CustomLink href="/privacy-policy">Privacy Policy</CustomLink>
            <span className="text-indigo-600">|</span>
            <CustomLink href="/terms-of-service">Terms of Service</CustomLink>
            <span className="text-indigo-600">|</span>
            <CustomLink href="/sitemap">Sitemap</CustomLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer