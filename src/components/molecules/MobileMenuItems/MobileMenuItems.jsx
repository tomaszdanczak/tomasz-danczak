import React from "react"
import { navigation } from "data/navigationItemsData"

export default function MobileMenuItems() {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
