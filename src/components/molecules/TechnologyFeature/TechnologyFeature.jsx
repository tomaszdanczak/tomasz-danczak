import React from "react"
import { CheckIcon } from "@heroicons/react/outline"

export default function TechnologyFeature({ feature: { title, description } }) {
  return (
    <div className="relative">
      <dt>
        <CheckIcon
          className="absolute h-6 w-6 text-green-500"
          aria-hidden="true"
        />
        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
          {title}
        </p>
      </dt>
      <dd className="mt-2 ml-9 text-base text-gray-500">{description}</dd>
    </div>
  )
}
