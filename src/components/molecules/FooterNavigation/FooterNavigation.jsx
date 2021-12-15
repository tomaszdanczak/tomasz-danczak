import React from "react"
import { navigation } from "data/navigationItemsData"

export default function FooterNavigation() {
  return (
    <nav
      className="-mx-5 -my-2 flex flex-wrap justify-center"
      aria-label="Footer"
    >
      {navigation.map(item => (
        <div key={item.name} className="px-5 py-2">
          <a
            href={item.href}
            className="text-base text-gray-500 hover:text-gray-900"
          >
            {item.name}
          </a>
        </div>
      ))}
    </nav>
  )
}
