import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import axios from "axios"
import TextArea from "components/molecules/TextArea/TextArea"
import SubmitButton from "components/atoms/SubmitButton/SubmitButton"
import { TextInput } from "components/molecules/TextInput/TextInput"

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
})

const onSubmit = (values, onSubmitProps) => {
  onSubmitProps.resetForm()

  console.log("values:", values)

  // axios.post(
  //   "https://us-central1-send-email-cccfc.cloudfunctions.net/sendEmail",
  //   values
  // )
}

export default function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form className="grid grid-cols-1 gap-y-6">
          <TextInput
            label="Full name"
            type="text"
            name="name"
            placeholder="Full name"
          />

          <TextInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
          />

          <TextInput
            label="Phone"
            type="text"
            name="phone"
            placeholder="Phone"
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
            <SubmitButton
              label="Submit"
              theme="indigo"
              disabled={
                !(formik.dirty && formik.isValid) || formik.isSubmitting
              }
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}
