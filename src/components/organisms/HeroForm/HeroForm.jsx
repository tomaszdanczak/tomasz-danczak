import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import FormControl from "components/atoms/FormControl/FormControl"
import SubmitButton from "components/atoms/SubmitButton/SubmitButton"
import axios from "axios"

export default function HeroForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: values => {
      axios.post("Firebase function here", values)
    },
  })

  return (
    <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
      <p className="text-base font-medium text-gray-900">
        Left your email to get CV.
      </p>
      <form
        action="#"
        method="POST"
        className="mt-3 sm:flex"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex-1">
          <FormControl
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
        </div>

        <div className="mt-3 sm:mt-0 sm:ml-3">
          {/* TODO: Success message: The email has been send successfully. */}
          <SubmitButton label="Get CV" theme="gray" />
        </div>
      </form>
    </div>
  )
}
