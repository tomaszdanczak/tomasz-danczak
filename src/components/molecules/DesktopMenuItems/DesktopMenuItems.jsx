import React from "react"
import { Link } from "gatsby"
import { navigation } from "data/navigationItemsData"

export default function DesktopMenuItems() {
  return (
    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
      {navigation.map(item => (
        <Link
          key={item.name}
          to={item.href}
          className="font-medium text-gray-500 hover:text-gray-900"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
