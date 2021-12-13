import React from "react"
import Header from "components/molecules/Header/Header"
import TechnologyFeature from "components/molecules/TechnologyFeature/TechnologyFeature"
import { graphql, useStaticQuery } from "gatsby"

export default function StaticSitesSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsStaticsitesfeature(sort: { fields: originalId }) {
        nodes {
          title
          description
        }
      }
      allDatoCmsHeading(
        filter: { section: { eq: "StaticSitesFeaturesSection" } }
      ) {
        nodes {
          subtitle
          title
          special
        }
      }
    }
  `)

  const features = data.allDatoCmsStaticsitesfeature.nodes
  const [headingData] = data.allDatoCmsHeading.nodes

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <Header
          centreFrom="sm"
          title={headingData.title}
          subtitle={headingData.subtitle}
        />

        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map(feature => (
            <TechnologyFeature key={feature.title} feature={feature} />
          ))}
        </dl>
      </div>
    </div>
  )
}
