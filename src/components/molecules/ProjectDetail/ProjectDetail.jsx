import React from "react"

export default function ProjectDetail({ title, live, liveurl, description }) {
  return (
    <>
      <div className="text-lg leading-6 font-medium space-y-1">
        <h3>{title}</h3>
        <a href={liveurl}>
          <p className="text-indigo-600 hover:text-indigo-400">{live}</p>
        </a>
      </div>
      <div className="text-lg">
        <p className="text-gray-500">{description}</p>
      </div>
    </>
  )
}
