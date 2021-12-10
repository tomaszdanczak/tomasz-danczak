import React from "react"

export default function ArticleHeading({ title }) {
  return (
    <h1>
      <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
        Introducing
      </span>
      <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </span>
    </h1>
  )
}
