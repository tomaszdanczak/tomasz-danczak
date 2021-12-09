import React from "react"

export default function HeroHeader({ title, title2, subtitle }) {
  return (
    <>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{title}</span>{" "}
        <span className="block text-indigo-600 xl:inline">{title2}</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        {subtitle}
      </p>
    </>
  )
}
