import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import ContactData from "components/molecules/ContactData/ContactData"

export default function Contact() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsContact {
        nodes {
          address
          address2
          phone
          email
        }
      }
    }
  `)

  const [contactData] = data.allDatoCmsContact.nodes

  return (
    <dl className="mt-8 text-base text-gray-500">
      <ContactData
        srOnly="Postal address"
        paragraph1={contactData.address}
        paragraph2={contactData.address2}
      />

      <ContactData
        srOnly="Phone number"
        marginTop="mt-6"
        span={contactData.phone}
        icon={
          <PhoneIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        }
      />

      <ContactData
        srOnly="Email"
        marginTop="mt-3"
        span={contactData.email}
        icon={
          <MailIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        }
      />
    </dl>
  )
}
