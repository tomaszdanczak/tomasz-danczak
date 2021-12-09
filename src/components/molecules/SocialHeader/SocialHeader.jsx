import React from "react"

export default function SocialHeader({ span1, span2, text }) {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">{span1}</span>
        <span className="block">{span2}</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-indigo-200">{text}</p>
    </>
  )
}
