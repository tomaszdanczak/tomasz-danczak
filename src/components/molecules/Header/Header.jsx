import React from "react"

export default function Header({ decoration, title, subtitle, centreFrom }) {
  return (
    <div className={getCentreClasses(centreFrom).wrapper}>
      {decoration && (
        <span
          className={`block mb-2 text-base text-indigo-600 font-semibold tracking-wide uppercase`}
        >
          {decoration}
        </span>
      )}

      <h2
        className={`text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 max-w-2xl text-xl text-gray-500 ${
          getCentreClasses(centreFrom).paragraph
        }`}
      >
        {subtitle}
      </p>
    </div>
  )
}

const getCentreClasses = centreFrom => {
  switch (centreFrom) {
    case "sm":
      return { wrapper: "text-center", paragraph: "mx-auto" }

    case "lg":
      return { wrapper: "lg:text-center", paragraph: "lg:mx-auto" }

    default:
      return ""
  }
}
