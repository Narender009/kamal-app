import React from "react"
import HeroSection from "../components/Home/herosection";
import CoursesList from "../components/home/courseslist";
import FeaturesSection from "../components/Home/featuressection";
import TestimonialsSection from "../components/home/testimonialssection";
import CtaSection from "../components/home/ctasection"

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
