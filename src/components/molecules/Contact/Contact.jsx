import React from "react"
import { MailIcon, PhoneIcon } from "@heroicons/react/outline"

export default function Contact() {
  return (
    <dl className="mt-8 text-base text-gray-500">
      <div>
        <dt className="sr-only">Postal address</dt>
        <dd>
          <p>742 Evergreen Terrace</p>
          <p>Springfield, OR 12345</p>
        </dd>
      </div>
      <div className="mt-6">
        <dt className="sr-only">Phone number</dt>
        <dd className="flex">
          <PhoneIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-3">+1 (555) 123-4567</span>
        </dd>
      </div>
      <div className="mt-3">
        <dt className="sr-only">Email</dt>
        <dd className="flex">
          <MailIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-3">support@example.com</span>
        </dd>
      </div>
    </dl>
  )
}
