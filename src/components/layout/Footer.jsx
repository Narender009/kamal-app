import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About FinTaxPro</h3>
            <p className="text-gray-600">
              FinTaxPro provides practical learning in finance, taxation, and accounting with hands-on courses designed
              for real-world applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-blue-600">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/consult-us" className="text-gray-600 hover:text-blue-600">
                  Consult Us
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">Phone: +91 7827521794</p>
            <p className="text-gray-600 mb-2">Email: info@fintaxpro.in</p>
            <p className="text-gray-600">Website: fintaxpro.in</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} FinTaxPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
