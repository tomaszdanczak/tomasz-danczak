import React from "react"
import { MailIcon, PhoneIcon } from "@heroicons/react/outline"
import ContactData from "components/molecules/ContactData/ContactData"

export default function Contact() {
  return (
    <dl className="mt-8 text-base text-gray-500">
      <ContactData
        srOnly="Postal address"
        paragraph1="742 Evergreen Terrace"
        paragraph2="Springfield, OR 12345"
      />

      <ContactData
        srOnly="Phone number"
        marginTop="mt-6"
        span="+1 (555) 123-4567"
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
        span="support@example.com"
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
