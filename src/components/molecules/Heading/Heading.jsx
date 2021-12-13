import React from "react"

export default function Heading({ title, subtitle }) {
  return (
    <>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="text-xl text-gray-500">{subtitle}</p>
    </>
  )
}
