import React from "react"

export default function SocialLink({ label, href }) {
  return (
    <a
      href={href}
      className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
    >
      {label}
    </a>
  )
}
