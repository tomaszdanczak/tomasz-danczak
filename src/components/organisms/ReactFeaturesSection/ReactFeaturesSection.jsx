import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "components/molecules/Header/Header"
import TechnologyFeature from "components/molecules/TechnologyFeature/TechnologyFeature"

export default function ReactFeaturesSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsReactfeature {
        nodes {
          title
          description
        }
      }
      allDatoCmsHeading(filter: { section: { eq: "ReactFeaturesSection" } }) {
        nodes {
          subtitle
          title
          special
        }
      }
    }
  `)

  const features = data.allDatoCmsReactfeature.nodes
  const [headingData] = data.allDatoCmsHeading.nodes

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <Header
          decoration={headingData.special}
          title={headingData.title}
          subtitle={headingData.subtitle}
        />

        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map(feature => (
              <TechnologyFeature key={feature.title} feature={feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
