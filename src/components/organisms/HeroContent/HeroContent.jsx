import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroHeader from "components/molecules/HeroHeader/HeroHeader"
import HeroForm from "../HeroForm/HeroForm"

export default function HeroContent() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsHeading(filter: { section: { eq: "HeroSection" } }) {
        nodes {
          subtitle
          title
          title2
        }
      }
    }
  `)

  const [headingData] = data.allDatoCmsHeading.nodes

  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <HeroHeader
          title={headingData.title}
          title2={headingData.title2}
          subtitle={headingData.subtitle}
        />
        <HeroForm />
      </div>
    </div>
  )
}
