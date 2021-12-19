import React from "react"
import HeroSection from "components/organisms/HeroSection/HeroSection"
import Footer from "components/organisms/Footer/Footer"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function MainLayout({ children }) {
  return (
    <>
      <HeroSection />
      {children}
      <Footer />
    </>
  )
}
