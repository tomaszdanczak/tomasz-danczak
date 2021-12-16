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

    sgMail.send(msg, (error, response) => {
      if (error) {
        res.send(500)
      } else {
        res.send(response)
      }
    })
  })
});

exports.sendEmail2 = functions.https.onRequest((req, res) => {

  sgMail.setApiKey(functions.config().sendgrid.key)

  const msg = {
    to: req.body.email,
    from: "tomaszdanczak@gmail.com",
    subject: `Thank you for your contact`,
    text: `s`,
    html: `
        <div style="color: #111827;font-family:sans-serif;">
          <p>Hello,</p>
          <p>I hope you’re having a wonderful day! </p>
          <p style="margin-top:30px;">If you want to get to know me better press the button below to download my CV</p>
          <a href="tomaszdanczak.pl/tomaszdanczak" style="display: inline-block; padding: 6px 10px; border-color: transparent; font-size: 12px; line-height: 16px; font-weight: 500; color: white; background-color:#4e46e5; border-radius: 4px;">
          Download CV
          </a>
          <p>More informations about me you can find on my <a href="linkedin.com/in/tomasz-danczak/">LinketIn</a> profile.</p>
          <p style="margin-top:30px;margin-bottom:-15px;">Best regards</p>
          <p style="font-size: 20px; font-weight: 800; color: #111827; tracking-tight font-extrabold text-gray-900">tomasz<span style="color:#4e46e5">danczak</span></p>
        </div>
        `
  }

  cors(req, res, () => {
    sgMail.send(msg, (error, response) => {
      if (error) {
        res.send(500)
      } else {
        res.send(response)
      }
    })
  })
});