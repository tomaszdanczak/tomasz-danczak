import React from "react"

export default function ContactForm() {
  return (
    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
      <div>
        <label htmlFor="full-name" className="sr-only">
          Full name
        </label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="name"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          autoComplete="tel"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Phone"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
          placeholder="Message"
          defaultValue={""}
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
