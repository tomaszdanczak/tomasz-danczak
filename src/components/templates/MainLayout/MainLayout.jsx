import React from "react"
import HeroSection from "components/organisms/HeroSection/HeroSection"

export default function MainLayout({ children }) {
  return (
    <>
      <HeroSection />
      {children}
    </>
  )
}
