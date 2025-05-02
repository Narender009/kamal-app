import React, { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import ServicesHeader from "../components/layout/ServicesHeader";

// Service categories with their respective services
const serviceCategories = [
  {
    id: "tax",
    title: "GST & Taxation Services",
    icon: "💼",
    color: "bg-gradient-to-br from-purple-600 to-indigo-700",
    textColor: "text-purple-100",
    services: [
      {
        id: 1,
        title: "GST Registration & Modification",
        description: "Complete assistance with GST registration and modification process for businesses of all sizes.",
        features: ["Application filing", "Document preparation", "Follow-up with department", "Certificate delivery"],
        price: "Starting from ₹1,999",
      },
      {
        id: 2,
        title: "GST Return Filing",
        description: "Professional GST return filing including GSTR-1, GSTR-3B, GSTR-9, GSTR-9C.",
        features: ["Return preparation", "Reconciliation", "Timely filing", "Compliance review"],
        price: "Starting from ₹899/month",
      },
      {
        id: 3,
        title: "GST Audit & Refunds",
        description: "Comprehensive GST audit services and assistance with refund claims.",
        features: ["Documentation review", "Compliance check", "Refund application", "Department coordination"],
        price: "Starting from ₹7,999",
      },
      {
        id: 4,
        title: "Income Tax Return Filing",
        description: "Professional ITR filing services for individuals, businesses, and professionals.",
        features: ["Income calculation", "Deduction optimization", "Form selection and filing", "Post-filing support"],
        price: "Starting from ₹999",
      },
      {
        id: 5,
        title: "Tax Planning & Advisory",
        description: "Strategic tax planning and advisory services to minimize tax liability legally.",
        features: ["Tax structure analysis", "Saving strategies", "Compliance planning", "Regular updates"],
        price: "Starting from ₹4,999",
      },
      {
        id: 6,
        title: "International Taxation",
        description: "Specialized tax services for international businesses and transfer pricing.",
        features: ["DTAA benefits", "Transfer pricing docs", "Compliance assistance", "Cross-border advisory"],
        price: "Starting from ₹9,999",
      },
    ],
  },
  {
    id: "business",
    title: "Company Registration & Business Formation",
    icon: "🏢",
    color: "bg-gradient-to-br from-emerald-600 to-teal-700",
    textColor: "text-emerald-100",
    services: [
      {
        id: 7,
        title: "Private Limited Company Incorporation",
        description: "End-to-end company incorporation services including ROC registration.",
        features: ["Name approval", "Document preparation", "ROC filing", "Certificate delivery"],
        price: "Starting from ₹7,999",
      },
      {
        id: 8,
        title: "LLP Registration",
        description: "Complete Limited Liability Partnership registration with all legal formalities.",
        features: ["Name reservation", "LLP agreement", "RoC filing", "LLPIN issuance"],
        price: "Starting from ₹6,999",
      },
      {
        id: 9,
        title: "Proprietorship Registration",
        description: "Quick and hassle-free proprietorship firm registration.",
        features: ["Business name registration", "Required licenses", "Tax registration", "Complete documentation"],
        price: "Starting from ₹2,999",
      },
      {
        id: 10,
        title: "One Person Company (OPC)",
        description: "Specialized registration service for One Person Companies.",
        features: ["Name approval", "OPC incorporation", "Nominee processing", "Compliance setup"],
        price: "Starting from ₹8,999",
      },
      {
        id: 11,
        title: "NGO Registration",
        description: "Complete assistance with NGO registration under various formats.",
        features: ["Trust/Society formation", "Documentation", "Registration with authorities", "Compliance setup"],
        price: "Starting from ₹9,999",
      },
      {
        id: 12,
        title: "Business Structure Consultation",
        description: "Expert advice on choosing the right business structure for your needs.",
        features: ["Comparative analysis", "Tax implications", "Future scalability", "Compliance requirements"],
        price: "Starting from ₹3,999",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Legal Services",
    icon: "⚖️",
    color: "bg-gradient-to-br from-blue-600 to-sky-700",
    textColor: "text-blue-100",
    services: [
      {
        id: 13,
        title: "ROC Compliance & Annual Filings",
        description: "Comprehensive ROC compliance including DIR-3 KYC, AOC-4, MGT-7 and other filings.",
        features: ["Timely filing", "Document preparation", "Compliance calendar", "Penalty prevention"],
        price: "Starting from ₹4,999/year",
      },
      {
        id: 14,
        title: "Event-Based Filings",
        description: "Quick processing of event-based filings for director changes, share transfers, etc.",
        features: ["Form selection", "Document drafting", "ROC submission", "Certificate delivery"],
        price: "Starting from ₹2,999",
      },
      {
        id: 15,
        title: "Legal Documentation",
        description: "Professional drafting of MOA, AOA, agreements, contracts, and legal notices.",
        features: ["Custom drafting", "Legal review", "Revision support", "Final documentation"],
        price: "Starting from ₹5,999",
      },
      {
        id: 16,
        title: "M&A Advisory",
        description: "Expert advisory services for mergers and acquisitions.",
        features: ["Due diligence", "Valuation support", "Legal compliance", "Transaction structuring"],
        price: "Starting from ₹49,999",
      },
      {
        id: 17,
        title: "Company Strike Off & Winding Up",
        description: "Simplified process for company strike off and winding up procedures.",
        features: ["Documentation", "ROC filings", "Statutory clearances", "Process management"],
        price: "Starting from ₹15,999",
      },
    ],
  },
  {
    id: "licensing",
    title: "Licensing & Certifications",
    icon: "🪪",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    textColor: "text-amber-100",
    services: [
      {
        id: 18,
        title: "MSME (Udyam) Registration",
        description: "Fast and reliable MSME registration to avail government benefits.",
        features: ["Online application", "Document preparation", "Certificate delivery", "Benefit advisory"],
        price: "Starting from ₹999",
      },
      {
        id: 19,
        title: "FSSAI Registration",
        description: "Complete Food License (FSSAI) registration for food businesses.",
        features: ["Application filing", "Compliance review", "Follow-up", "License delivery"],
        price: "Starting from ₹3,999",
      },
      {
        id: 20,
        title: "Import Export Code (IEC)",
        description: "Quick IEC registration for businesses engaged in import-export activities.",
        features: ["Documentation", "Application processing", "Follow-up", "Code delivery"],
        price: "Starting from ₹2,999",
      },
      {
        id: 21,
        title: "ISO Certification",
        description: "Comprehensive assistance with obtaining various ISO certifications.",
        features: ["Gap analysis", "Documentation", "Process improvement", "Certification coordination"],
        price: "Starting from ₹12,999",
      },
      {
        id: 22,
        title: "Shop & Establishment License",
        description: "Hassle-free registration of Shop & Establishment license.",
        features: ["Application preparation", "Documentation", "Authority liaison", "License delivery"],
        price: "Starting from ₹1,999",
      },
    ],
  },
  {
    id: "ipr",
    title: "Intellectual Property Rights (IPR)",
    icon: "™️",
    color: "bg-gradient-to-br from-pink-600 to-rose-700",
    textColor: "text-pink-100",
    services: [
      {
        id: 23,
        title: "Trademark Registration",
        description: "Protect your brand with our comprehensive trademark registration services.",
        features: ["Trademark search", "Application filing", "Objection handling", "Registration certificate"],
        price: "Starting from ₹6,999",
      },
      {
        id: 24,
        title: "Copyright Registration",
        description: "Secure copyright registration for your creative works and content.",
        features: ["Application preparation", "Documentation", "Filing process", "Certificate delivery"],
        price: "Starting from ₹4,999",
      },
      {
        id: 25,
        title: "Patent Filing Support",
        description: "Expert assistance with patent application and filing process.",
        features: ["Patentability assessment", "Application drafting", "Filing coordination", "Follow-up support"],
        price: "Starting from ₹29,999",
      },
      {
        id: 26,
        title: "IP Protection & Advisory",
        description: "Comprehensive intellectual property protection and strategic advisory services.",
        features: ["IP audit", "Protection strategy", "Infringement detection", "Enforcement support"],
        price: "Starting from ₹8,999",
      },
    ],
  },
  {
    id: "payroll",
    title: "Payroll & HR Compliance",
    icon: "👥",
    color: "bg-gradient-to-br from-cyan-600 to-blue-700",
    textColor: "text-cyan-100",
    services: [
      {
        id: 27,
        title: "Payroll Management",
        description: "End-to-end payroll processing and salary structuring services.",
        features: ["Salary calculation", "Statutory deductions", "Payslip generation", "Compliance checks"],
        price: "Starting from ₹3,999/month",
      },
      {
        id: 28,
        title: "PF & ESI Registration",
        description: "Complete assistance with PF and ESI registration process.",
        features: ["Application preparation", "Documentation", "Department coordination", "Registration certificate"],
        price: "Starting from ₹2,999",
      },
      {
        id: 29,
        title: "Labour Law Compliance",
        description: "Comprehensive labour law compliance and advisory services.",
        features: ["Compliance audit", "Document preparation", "Regulatory filings", "Advisory support"],
        price: "Starting from ₹5,999",
      },
      {
        id: 30,
        title: "Employee Onboarding Compliance",
        description: "Streamlined employee onboarding with complete compliance adherence.",
        features: ["Document verification", "Statutory registration", "Compliance checks", "Record maintenance"],
        price: "Starting from ₹1,999/employee",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Online Business Solutions",
    icon: "🛒",
    color: "bg-gradient-to-br from-violet-600 to-purple-700",
    textColor: "text-violet-100",
    services: [
      {
        id: 31,
        title: "Online Business Formation",
        description: "Specialized business formation services for online and e-commerce businesses.",
        features: ["Business structure", "Tax registration", "Compliance setup", "Documentation"],
        price: "Starting from ₹5,999",
      },
      {
        id: 32,
        title: "E-Commerce Tax & Legal Support",
        description: "Specialized taxation and legal support for e-commerce businesses.",
        features: ["Tax structure", "Compliance review", "Legal documentation", "Regulatory advisory"],
        price: "Starting from ₹4,999",
      },
      {
        id: 33,
        title: "Website Terms & Policies",
        description: "Professional drafting of website terms, conditions, and privacy policies.",
        features: ["Custom policy drafting", "Legal compliance", "GDPR consideration", "Regular updates"],
        price: "Starting from ₹3,999",
      },
      {
        id: 34,
        title: "Digital Business Licenses",
        description: "Assistance with obtaining all necessary licenses for digital businesses.",
        features: ["License identification", "Application process", "Documentation", "Certificate delivery"],
        price: "Starting from ₹2,999",
      },
    ],
  },
  {
    id: "advisory",
    title: "Business Advisory & Compliance Solutions",
    icon: "📊",
    color: "bg-gradient-to-br from-green-600 to-emerald-700",
    textColor: "text-green-100",
    services: [
      {
        id: 35,
        title: "Business Setup Consultation",
        description: "Expert guidance on setting up your business from scratch.",
        features: ["Business planning", "Structure advisory", "Compliance roadmap", "Setup assistance"],
        price: "Starting from ₹4,999",
      },
      {
        id: 36,
        title: "Startup India Registration",
        description: "Complete assistance with Startup India recognition and benefits.",
        features: ["Eligibility check", "Documentation", "Application process", "Benefit advisory"],
        price: "Starting from ₹3,999",
      },
      {
        id: 37,
        title: "Financial Planning",
        description: "Strategic financial planning and tax saving strategies for businesses.",
        features: ["Financial assessment", "Strategy development", "Implementation plan", "Regular reviews"],
        price: "Starting from ₹7,999",
      },
      {
        id: 38,
        title: "Audit Services",
        description: "Comprehensive audit services including internal, tax, and business audits.",
        features: ["Process review", "Documentation audit", "Compliance check", "Recommendation report"],
        price: "Starting from ₹9,999",
      },
      {
        id: 39,
        title: "Custom Compliance Solutions",
        description: "Tailored compliance solutions specific to your industry and business needs.",
        features: ["Industry analysis", "Compliance mapping", "Implementation plan", "Monitoring system"],
        price: "Starting from ₹6,999",
      },
      {
        id: 40,
        title: "DSC (Digital Signature Certificate)",
        description: "Quick and hassle-free Digital Signature Certificate issuance.",
        features: ["Application processing", "Document verification", "DSC issuance", "Installation support"],
        price: "Starting from ₹1,499",
      },
    ],
  },
];

const ServiceCategory = ({ category, isActive, onClick }) => {
  return (
    <div 
      className={`mb-6 cursor-pointer transition-all duration-300 ${isActive ? 'scale-100' : 'scale-98'}`}
      onClick={onClick}
    >
      <div className={`rounded-xl shadow-lg overflow-hidden ${category.color} transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}>
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-4xl mr-4">{category.icon}</span>
            <h2 className={`text-2xl font-bold ${category.textColor}`}>{category.title}</h2>
          </div>
          <div className={`${category.textColor}`}>
            {isActive ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </div>
      
      {isActive && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 animate-fadeIn">
          {category.services.map((service) => (
            <ServiceCard key={service.id} service={service} categoryColor={category.color} />
          ))}
        </div>
      )}
    </div>
  );
};

const ServiceCard = ({ service, categoryColor }) => {
  const cardColorClass = categoryColor.replace('from-', 'from-opacity-10 from-').replace('to-', 'to-opacity-5 to-');
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}>
      <div className={`h-2 ${categoryColor}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Service Includes:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="text-gray-600 flex items-start text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">{service.price}</span>
            <button className={`px-4 py-2 ${categoryColor} text-white font-medium rounded-full hover:opacity-90 transition-colors`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-8 max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for services..."
          className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    // If there's a search query, expand all categories
    if (query.trim()) {
      setActiveCategory(null);
    }
  };
  
  const filteredCategories = searchQuery.trim() === "" 
    ? serviceCategories 
    : serviceCategories.map(category => ({
        ...category,
        services: category.services.filter(service => 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })).filter(category => category.services.length > 0);

  return (
    <>
      <ServicesHeader />
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We offer a comprehensive range of business, taxation, and compliance services to help your business thrive in today's complex regulatory environment.
            </p>
            
            <SearchBar onSearch={handleSearch} />
            
            {searchQuery.trim() !== "" && (
              <div className="mb-8 p-4 bg-blue-50 rounded-lg text-blue-800 inline-block">
                Showing results for: <strong>"{searchQuery}"</strong>
                <button 
                  className="ml-4 text-sm underline text-blue-600"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <ServiceCategory 
                key={category.id}
                category={category}
                isActive={activeCategory === category.id || searchQuery.trim() !== ""}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Custom Solutions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We understand that every business is unique. Contact us for custom packages tailored to your specific requirements.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-full hover:opacity-90 transition-colors shadow-md">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;