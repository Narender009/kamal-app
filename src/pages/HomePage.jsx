import React from "react"
import HeroSection from "../components/Home/herosection";
import CoursesList from "../components/home/CoursesList";
import FeaturesSection from "../components/Home/FeaturesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection"

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
