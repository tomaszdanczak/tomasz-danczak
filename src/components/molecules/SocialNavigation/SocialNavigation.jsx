import React from "react"
import { navigation } from "data/socialNavigationItemsData"

export default function SocialNavigation() {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
