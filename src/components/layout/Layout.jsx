import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import WhatsAppButton from "../ui/WhatsAppButton"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default Layout

