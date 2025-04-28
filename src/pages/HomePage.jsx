import React from "react"
import HeroSection from "../components/Home/herosection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CoursesList from "../components/Home/CoursesList";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CtaSection from "../components/Home/CtaSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CoursesList />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

export default HomePage
