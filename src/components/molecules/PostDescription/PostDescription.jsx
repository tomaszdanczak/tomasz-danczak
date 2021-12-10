import React from "react"

export default function PostDescription({ category, title, description }) {
  return (
    <div className="flex-1">
      <p className="text-sm font-medium text-indigo-600">
        <span href={category.href} className="hover:underline">
          {category}
        </span>
      </p>

      <div className="block mt-2">
        <p className="text-xl font-semibold text-gray-900">{title}</p>
        <p className="mt-3 text-base text-gray-500">{description}</p>
      </div>
    </div>
  )
}
