import { CheckCircle } from "lucide-react"

const services = [
  {
    id: 1,
    title: "GST Registration",
    description: "Complete assistance with GST registration process for businesses of all sizes.",
    features: ["Application filing", "Document preparation", "Follow-up with department", "Certificate delivery"],
    price: "Starting from ₹1,999",
  },
  {
    id: 2,
    title: "Income Tax Return Filing",
    description: "Professional ITR filing services for individuals, businesses, and professionals.",
    features: ["Income calculation", "Deduction optimization", "Form selection and filing", "Post-filing support"],
    price: "Starting from ₹999",
  },
  {
    id: 3,
    title: "Company Registration",
    description: "End-to-end company incorporation services including ROC registration.",
    features: ["Name approval", "Document preparation", "ROC filing", "Certificate delivery"],
    price: "Starting from ₹7,999",
  },
  {
    id: 4,
    title: "Trademark Registration",
    description: "Protect your brand with our comprehensive trademark registration services.",
    features: ["Trademark search", "Application filing", "Objection handling", "Registration certificate"],
    price: "Starting from ₹6,999",
  },
  {
    id: 5,
    title: "Accounting Services",
    description: "Professional accounting and bookkeeping services for businesses.",
    features: ["Bookkeeping", "Financial statements", "Reconciliations", "MIS reports"],
    price: "Starting from ₹4,999/month",
  },
  {
    id: 6,
    title: "DSC (Digital Signature Certificate)",
    description: "Quick and hassle-free Digital Signature Certificate issuance.",
    features: ["Application processing", "Document verification", "DSC issuance", "Installation support"],
    price: "Starting from ₹1,499",
  },
]

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of professional services to help businesses and individuals with their financial,
          taxation, and compliance needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Service Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesPage
