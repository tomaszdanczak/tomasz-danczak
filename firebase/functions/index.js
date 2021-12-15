const functions = require("firebase-functions");
const cors = require("cors")({ origin: true })
const sgMail = require('@sendgrid/mail')

exports.sendEmail = functions.https.onRequest((req, res) => {

  const msg = {
    to: "9452891@gmail.com",
    from: "tomaszdanczak@gmail.com",
    subject: `New message from ${req.body.name} (${req.body.email})`,
    text: `
    Message from: ${req.body.name}
    Phone: ${req.body.phone}
    Email: ${req.body.email}
    Message: ${req.body.message}
    `,
  }

  cors(req, res, () => {
    sgMail.setApiKey(functions.config().sendgrid.key)

    sgMail.send(msg).then(() => {
      console.log('Email sent')
    })
      .catch((error) => {
        console.error(error.response.body)
      })
  })
});