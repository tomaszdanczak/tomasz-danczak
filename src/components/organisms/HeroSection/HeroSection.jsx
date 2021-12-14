import React from "react"
import Polygon from "components/atoms/Polygon/Polygon"
import Navigation from "components/organisms/Navigation/Navigation"
import HeroContent from "components/organisms/HeroContent/HeroContent"
import HeroImage from "components/atoms/HeroImage/HeroImage"

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Polygon />

          <Navigation />

          <HeroContent />
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <HeroImage />
      </div>
    </div>
  )
}
