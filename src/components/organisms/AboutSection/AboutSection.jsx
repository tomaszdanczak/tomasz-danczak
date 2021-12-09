import React from "react"
import Header from "components/molecules/Header/Header"
import AboutItem from "components/molecules/AboutItem/AboutItem"
import { graphql, useStaticQuery } from "gatsby"

export default function AboutSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsHeading(filter: { section: { eq: "AboutSection" } }) {
        nodes {
          title
          subtitle
          special
        }
      }
      allDatoCmsAboutsectionfeature(sort: { fields: originalId }) {
        nodes {
          title
          description
        }
      }
    }
  `)

  const [headingData] = data.allDatoCmsHeading.nodes
  const features = data.allDatoCmsAboutsectionfeature.nodes

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header
          centreFrom="lg"
          decoration={headingData.special}
          title={headingData.title}
          subtitle={headingData.subtitle}
        />

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name}>
                <AboutItem
                  name={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
