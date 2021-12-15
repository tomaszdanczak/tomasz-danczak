import React from "react"
import FooterNavigation from "components/molecules/FooterNavigation/FooterNavigation"
import SocialNavigation from "components/molecules/SocialNavigation/SocialNavigation"

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <FooterNavigation />
        <SocialNavigation />

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
