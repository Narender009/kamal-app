import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import ServicesPage from "./pages/ServicesPage"
import ConsultPage from "./pages/ConsultPage"
import BuyDSCPage from "./pages/BuyDSCPage"
import NewsletterPage from "./pages/NewsletterPage"
import AboutPage from "./pages/AboutPage"
import FAQPage from "./pages/FAQPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    
    <Layout>
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/courses" element={<CoursesPage />} /> */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/consult-us" element={<ConsultPage />} />
        <Route path="/buy-dsc" element={<BuyDSCPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Routes>
    </Layout>
  )
}

export default App
