import React from "react"
import Header from "components/molecules/Header/Header"
import TechnologyFeature from "components/molecules/TechnologyFeature/TechnologyFeature"

const features = [
  {
    name: "Invite team members",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "List view",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Calendars",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Notifications",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Boards",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Reporting",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Mobile app",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
]

export default function ReactFeaturesSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <Header
          decoration="Everything you need"
          title="All-in-one platform"
          subtitle="Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec."
        />

        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map(feature => (
              <TechnologyFeature key={feature.title} feature={feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
