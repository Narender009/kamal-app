"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import FAQHeader from "../components/layout/FAQHeader"

const faqs = [
  {
    id: 1,
    category: "Courses",
    questions: [
      {
        id: "c1",
        question: "How are the courses delivered?",
        answer:
          "Our courses are delivered through our online learning platform. You'll get access to video lectures, downloadable resources, quizzes, and assignments. You can learn at your own pace and access the content anytime.",
      },
      {
        id: "c2",
        question: "Do I get lifetime access to the courses?",
        answer:
          "Yes, once you purchase a course, you get lifetime access to all the course materials. You can revisit the content whenever you need to refresh your knowledge.",
      },
      {
        id: "c3",
        question: "Are the courses updated regularly?",
        answer:
          "Yes, we regularly update our courses to reflect the latest changes in tax laws, regulations, and industry practices. As a student, you'll get access to all future updates at no additional cost.",
      },
      {
        id: "c4",
        question: "Do you provide certificates upon completion?",
        answer:
          "Yes, upon successful completion of a course, you'll receive a certificate that you can add to your resume or LinkedIn profile to showcase your skills.",
      },
    ],
  },
  {
    id: 2,
    category: "Services",
    questions: [
      {
        id: "s1",
        question: "What services do you offer?",
        answer:
          "We offer a range of services including GST registration, Income Tax Return filing, Company Registration, Trademark Registration, Accounting Services, and DSC (Digital Signature Certificate) issuance.",
      },
      {
        id: "s2",
        question: "How long does it take to complete a service request?",
        answer:
          "The time frame varies depending on the service. Simple services like ITR filing may be completed within 1-2 days, while complex services like company registration may take 10-15 days. We'll provide you with a specific timeline when you place your order.",
      },
      {
        id: "s3",
        question: "Do you provide ongoing support after service completion?",
        answer:
          "Yes, we provide post-service support to address any queries or issues that may arise. Our team is always available to assist you.",
      },
    ],
  },
  {
    id: 3,
    category: "Payment & Refunds",
    questions: [
      {
        id: "p1",
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including credit/debit cards, net banking, UPI, and wallet payments. All payments are processed securely through our payment gateway.",
      },
      {
        id: "p2",
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 7-day refund policy for courses if you're not satisfied with the content. For services, refunds are provided if we fail to deliver the service as promised. Please refer to our refund policy for more details.",
      },
      {
        id: "p3",
        question: "Are there any hidden charges?",
        answer:
          "No, there are no hidden charges. The price you see is the final price you pay. For some services, government fees may be applicable, which will be clearly mentioned before you make the payment.",
      },
    ],
  },
  {
    id: 4,
    category: "Technical Support",
    questions: [
      {
        id: "t1",
        question: "What if I face technical issues while accessing the courses?",
        answer:
          "If you face any technical issues, you can reach out to our support team via email or phone. We'll assist you in resolving the issue as quickly as possible.",
      },
      {
        id: "t2",
        question: "Can I access the courses on mobile devices?",
        answer:
          "Yes, our learning platform is mobile-responsive, allowing you to access the courses on smartphones and tablets. We also have a mobile app for a better learning experience on mobile devices.",
      },
      {
        id: "t3",
        question: "Is my data secure on your platform?",
        answer:
          "Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your personal and payment information. We do not share your data with third parties without your consent.",
      },
    ],
  },
]

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState(1)
  const [openQuestions, setOpenQuestions] = useState([])

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId)
  }

  const toggleQuestion = (questionId) => {
    if (openQuestions.includes(questionId)) {
      setOpenQuestions(openQuestions.filter((id) => id !== questionId))
    } else {
      setOpenQuestions([...openQuestions, questionId])
    }
  }

  return (
    <>
    <FAQHeader />
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our courses, services, payment methods, and more.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((category) => (
          <div key={category.id} className="mb-6">
            <button
              onClick={() => toggleCategory(category.id)}
              className={`w-full flex justify-between items-center p-4 rounded-lg ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg font-semibold">{category.category}</span>
              {activeCategory === category.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {activeCategory === category.id && (
              <div className="mt-2 space-y-2">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-800">{faq.question}</span>
                      {openQuestions.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    {openQuestions.includes(faq.id) && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          If you couldn't find the answer to your question, please feel free to contact us. Our support team is always
          ready to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/consult-us"
            className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="mailto:info@fintaxpro.in"
            className="inline-flex justify-center items-center px-6 py-3 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default FAQPage
