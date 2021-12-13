import React from "react"

export default function FormControl({
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  touched,
  error,
}) {
  return (
    <div className="relative w-full">
      <label htmlFor="name" className="sr-only">
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error ? <p className="ml-3 text-red-600">{error}</p> : null}
    </div>
  )
}
