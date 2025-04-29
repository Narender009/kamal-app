import React from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CA Student",
    content:
      "The GST course was incredibly practical and helped me understand the complexities of GST filing. The instructor's real-world examples made learning easy and engaging.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Accountant",
    content:
      "I took the Tally Prime course and it has significantly improved my efficiency at work. The step-by-step approach and practical exercises were very helpful.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Business Owner",
    content:
      "The Income Tax course helped me understand how to optimize my business taxes. The knowledge I gained has saved me a significant amount in tax liabilities.",
    rating: 4,
    image: "/placeholder.svg?height=80&width=80",
  },
]

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-800">What Our Students Say</h2>
          <p className="text-indigo-600 mt-2">Hear from our satisfied learners about their experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900">{testimonial.name}</h4>
                  <p className="text-indigo-700 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "text-purple-500 fill-purple-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 italic bg-indigo-50 p-3 rounded-md">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection