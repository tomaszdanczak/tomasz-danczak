import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import SubmitButton from "components/atoms/SubmitButton/SubmitButton"
import { TextInput } from "components/molecules/TextInput/TextInput"

const initialValues = {
  email: "",
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
})

const onSubmit = values => {
  console.log("values:", values)

  // axios.post(
  //   "https://us-central1-send-email-cccfc.cloudfunctions.net/sendEmail2",
  //   values
  // )
}

export default function HeroForm() {
  return (
    <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
      <p className="text-base font-medium text-gray-900">
        Left your email to get CV.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <form
          action="#"
          method="POST"
          className="mt-3 sm:flex"
          // onSubmit={formik.handleSubmit}
        >
          <div className="flex-1">
            <TextInput
              label="Enter your email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-3 sm:mt-0 sm:ml-3">
            {/* TODO: Success message: The email has been send successfully. */}
            <SubmitButton label="Get CV" theme="gray" />
          </div>
        </form>
      </Formik>
    </div>
  )
}
