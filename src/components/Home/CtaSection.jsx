import { Link } from "react-router-dom"
import Button from "../ui/Button"

const CtaSection = () => {
  return (
    <section className="py-16 hero-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students who have transformed their careers with our practical courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/courses">
            <Button className="min-w-[180px]">Explore Courses</Button>
          </Link>
          <Link to="/consult-us">
            <Button variant="secondary" className="min-w-[180px] text-gray-800">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
