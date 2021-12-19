import React from "react"
import { navigation } from "data/navigationItemsData"

export default function DesktopMenuItems() {
  return (
    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className="cursor-pointer font-medium text-gray-500 hover:text-gray-900"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
