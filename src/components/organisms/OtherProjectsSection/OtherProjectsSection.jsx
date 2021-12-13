import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "components/molecules/Header/Header"
import ProjectItem from "components/organisms/ProjectItem/ProjectItem"

export default function OtherProjectsSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsOtherproject {
        nodes {
          title
          live
          liveurl
          description
          more
          moreurl
          image {
            fluid {
              src
              srcSet
              sizes
            }
          }
        }
      }
      allDatoCmsHeading(filter: { section: { eq: "OtherProjectsSection" } }) {
        nodes {
          subtitle
          title
          special
        }
      }
    }
  `)

  const projects = data.allDatoCmsOtherproject.nodes
  const [headingData] = data.allDatoCmsHeading.nodes

  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <Header title={headingData.title} subtitle={headingData.subtitle} />

          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {projects.map(project => (
              <ProjectItem key={project.title} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
