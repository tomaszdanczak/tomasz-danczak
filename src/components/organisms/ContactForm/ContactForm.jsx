import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import FormControl from "components/molecules/FormControl/FormControl"
import TextArea from "components/molecules/TextArea/TextArea"

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: values => {
      axios.post("Firebase Cloud Function Here", values)
    },
  })

  return (
    <form
      action="#"
      method="POST"
      className="grid grid-cols-1 gap-y-6"
      onSubmit={formik.handleSubmit}
    >
      <FormControl
        type="text"
        name="name"
        placeholder="Full name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        touched={formik.touched.name}
        error={formik.errors.name}
      />

      <FormControl
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        touched={formik.touched.email}
        error={formik.errors.email}
      />

      <FormControl
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        touched={formik.touched.phone}
        error={formik.errors.phone}
      />

      <TextArea
        name="message"
        placeholder="Message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        touched={formik.touched.message}
        error={formik.errors.message}
      />

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
