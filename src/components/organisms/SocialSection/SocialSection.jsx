import React from "react"
import SocialHeader from "../../molecules/SocialHeader/SocialHeader"

export default function SocialSection() {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <SocialHeader
          span1="Boost your productivity."
          span2="Start using Workflow today."
          text="Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec."
        />

        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Sign up for free
        </a>
      </div>
    </div>
  )
}
