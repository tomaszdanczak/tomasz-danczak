import React from "react"
import { navigation } from "data/navigationItemsData"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function DesktopMenuItems() {
  return (
    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
      {navigation.map(item => (
        <a
          key={item.name}
          to={item.href}
          className="cursor-pointer font-medium text-gray-500 hover:text-gray-900"
          onClick={() => scrollTo(`${item.href}`)}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
