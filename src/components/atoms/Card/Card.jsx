import React from "react"

export default function Card({ children }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      {children}
    </div>
  )
}
