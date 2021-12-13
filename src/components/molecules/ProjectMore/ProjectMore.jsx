import React from "react"
import GitHubIcon from "assets/icons/github-icon.svg"

export default function ProjectMore({ more, moreurl }) {
  return (
    <div>
      <a href={moreurl} className="flex space-x-2">
        <p className="text-indigo-600 hover:text-indigo-400">{more}</p>
        <span className="text-gray-400 hover:text-gray-500 mt-1">
          <GitHubIcon />
        </span>
      </a>
    </div>
  )
}
