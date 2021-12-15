import React from "react"
import HeroSection from "components/organisms/HeroSection/HeroSection"
import Footer from "components/organisms/Footer/Footer"

export default function MainLayout({ children }) {
  return (
    <>
      <HeroSection />
      {children}
      <Footer />
    </>
  )
}
