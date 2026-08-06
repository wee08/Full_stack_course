// mailer.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // your Gmail address
    pass: "your-16-char-app-password", // the app password (no spaces)
  },
});

async function sendEmail() {
  try {
    const info = await transporter.sendMail({
      from: '"Your Name" <your-email@gmail.com>',
      to: "recipient@example.com",
      subject: "Hello from Nodemailer",
      text: "This is a plain text message.",
      html: "<b>This is an HTML message.</b>",
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
module.exports = { sendEmail };
