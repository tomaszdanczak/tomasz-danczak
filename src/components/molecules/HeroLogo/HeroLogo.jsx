import React from "react"
import { Link } from "gatsby"

export default function HeroLogo() {
  return (
    <Link to={"/"}>
      <span className="sr-only">Tomasz Dańczak Portfolio Website</span>
      <p className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
        tomasz<span className="text-indigo-600 inline">danczak</span>
      </p>
    </Link>
  )
}
