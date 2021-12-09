import React from "react"
import SocialLink from "../../atoms/SocialLink/SocialLink"
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

        <div className="sm:space-x-8">
          <SocialLink
            label="LinkedIn"
            href="https://www.linkedin.com/in/tomasz-danczak/"
          />
          <SocialLink label="GitHub" href="https://github.com/tomaszdanczak" />
        </div>
      </div>
    </div>
  )
}
