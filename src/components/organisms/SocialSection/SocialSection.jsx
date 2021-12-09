import React from "react"
import SocialLink from "components/atoms/SocialLink/SocialLink"
import SocialHeader from "components/molecules/SocialHeader/SocialHeader"
import { graphql, useStaticQuery } from "gatsby"

export default function SocialSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsHeading(filter: { section: { eq: "SocialSection" } }) {
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
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <SocialHeader
          span1={headingData.title}
          span2={headingData.title2}
          text={headingData.subtitle}
        />

        <div className="sm:space-x-8">
          <SocialLink
            label="LinkedIn"
            href="https://www.linkedin.com/in/tomasz-danczak/"
          />
          <SocialLink label="GitHub" href="https://github.com/tomaszdanczak" />
        </div>
      </div>
    </div>
  )
}
