import React from "react"
import ProjectImage from "components/atoms/ProjectImage/ProjectImage"
import ProjectDetail from "components/molecules/ProjectDetail/ProjectDetail"
import ProjectMore from "components/molecules/ProjectMore/ProjectMore"

export default function ProjectItem({
  project: { title, live, liveurl, description, more, moreurl, image },
}) {
  return (
    <li>
      <div className="space-y-4">
        <ProjectImage image={image} altText={title} />

        <ProjectDetail
          title={title}
          live={live}
          liveurl={liveurl}
          description={description}
        />

        <ProjectMore more={more} moreurl={moreurl} />
      </div>
    </li>
  )
}
