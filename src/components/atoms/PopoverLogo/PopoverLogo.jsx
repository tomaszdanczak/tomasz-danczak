import React from "react"
import { Link } from "gatsby"
import Icon from "assets/icons/mobile-menu-icon.svg"

export default function PopoverLogo() {
  return (
    <div>
      <Link to={"/"}>
        <span className="sr-only">Tomasz Dańczak Portfolio Website</span>
        <Icon />
      </Link>
    </div>
  )
}
