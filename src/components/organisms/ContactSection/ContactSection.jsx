import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Heading from "components/molecules/Heading/Heading"
import Contact from "components/molecules/Contact/Contact"
import ContactFooter from "components/atoms/ContactFooter/ContactFooter"
import ContactForm from "components/organisms/ContactForm/ContactForm"

export default function ContactSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsHeading(filter: { section: { eq: "ContactSection" } }) {
        nodes {
          subtitle
          title
        }
      }
    }
  `)

  const [headingData] = data.allDatoCmsHeading.nodes

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>

      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto space-y-5 sm:space-y-4">
            <Heading
              title={headingData.title}
              subtitle={headingData.subtitle}
            />
            <Contact />
            <ContactFooter />
          </div>
        </div>

        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
