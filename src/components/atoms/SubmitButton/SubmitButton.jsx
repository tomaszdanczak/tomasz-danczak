import React from "react"

export default function SubmitButton({ label, theme, disabled }) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${getClasses(
        theme
      )}`}
    >
      {label}
    </button>
  )
}

const getClasses = theme => {
  switch (theme) {
    case "indigo":
      return "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"

    case "gray":
      return "text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:ring-indigo-500"

    default:
      return ""
  }
}
