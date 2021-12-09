import React from "react"
import { Link } from "gatsby"
import HeroIcon from "assets/icons/hero-icon.svg"

export default function HeroLogo() {
  return (
    <Link to={"/"}>
      <span className="sr-only">Tomasz Dańczak Portfolio Website</span>
      <HeroIcon />
    </Link>
  )
}
