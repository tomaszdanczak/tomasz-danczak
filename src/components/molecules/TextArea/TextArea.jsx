import React from "react"

export default function TextArea({
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  touched,
  error,
  disabled,
}) {
  return (
    <div>
      <label htmlFor="name" className="sr-only">
        {placeholder}
      </label>
      <textarea
        id={name}
        name={name}
        disabled={disabled}
        rows={4}
        autoComplete={name}
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md disabled:opacity-50"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error ? <p className="ml-3 text-red-600">{error}</p> : null}
    </div>
  )
}
