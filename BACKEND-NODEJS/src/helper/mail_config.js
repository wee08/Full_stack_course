// mailer.js
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // your Gmail address
    pass: process.env.APP_PASSWORD, // the app password (no spaces)
  },
});

async function sendEmail(req, res) {
  try {
    const { to, subject, text, html } = req.body;
    const mailOptions = {
      from: "manutnithya08@gmail.com", // SENDER
      to: to, // reciever
      subject: subject,
      text: text,
      html: html,
      attachments: [
        {
          filname: "sean_manutnithya_cv_1.pdf",
          path: path.join(__dirname, "./sean_manutnithya_cv_1.pdf"),
        },
      ],
      //   text: "This is a plain text message.",
      //   html: "<b>This is an HTML message.</b>",
    };
    const info = await transporter.sendMail(mailOptions);
    res.send({
      message: "send mail successfully",
    });
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
module.exports = { sendEmail };
