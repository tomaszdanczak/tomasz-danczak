import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Heading from "components/molecules/Heading/Heading"
import ProjectItem from "components/organisms/ProjectItem/ProjectItem"

export default function ProjectsSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject {
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
      allDatoCmsHeading(filter: { section: { eq: "ProjectsSection" } }) {
        nodes {
          subtitle
          title
          special
        }
      }
    }
  `)

  const projects = data.allDatoCmsProject.nodes
  const [headingData] = data.allDatoCmsHeading.nodes

  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <Heading
              title={headingData.title}
              subtitle={headingData.subtitle}
            />
          </div>

          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {projects.map(project => (
                <ProjectItem key={project.title} project={project} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
