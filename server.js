const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));  // Allow only frontend from localhost:3000

app.use(express.json());  // to parse incoming JSON

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "megna.sth1@gmail.com",
    pass: "jutb tuhf izav ivkh",  // Ensure this password is correct
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error with email config:", error);
  } else {
    console.log("Email transport is ready");
  }
});

// POST endpoint for contact form
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = firstName + " " + lastName;

  const mail = {
    from: name,
    to: "megna.sth1@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ status: "Error", message: error });
    } else {
      res.status(200).json({ status: "Message Sent" });
    }
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
