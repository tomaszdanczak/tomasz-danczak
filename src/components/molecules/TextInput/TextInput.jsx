import React from "react"
import { useField } from "formik"

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="relative w-full">
      <label htmlFor={props.id || props.name} className="sr-only">
        {label}
      </label>
      <input
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md disabled:opacity-50"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="ml-3 text-red-600">{meta.error}</div>
      ) : null}
    </div>
  )
}
