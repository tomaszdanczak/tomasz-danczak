import React from "react"

import { CheckIcon } from "@heroicons/react/solid"

export default function AboutItem({ name, description }) {
  return (
    <div key={name} className="relative">
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
          <CheckIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
          {name}
        </p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">{description}</dd>
    </div>
  )
}
