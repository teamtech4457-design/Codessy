const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aapkagmail@gmail.com',        // sender ka gmail address
    pass: 'gmail_app_password'           // Gmail App password (Google account se generate karein)
  }
});

app.post('/api/send-email', (req, res) => {
  const { name, email, message, queryMessage } = req.body;

  const mailOptionsToReceiver = {
    from: email,
    to: 'receiver@example.com', // yahan receiver ka email dalein
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nQuery Message: ${queryMessage}`
  };

  const mailOptionsToUser = {
    from: 'receiver@example.com',
    to: email,
    subject: 'Thank you for contacting us!',
    text: `Hi ${name},\n\nThank you for your message. We have received your query:\n\n${queryMessage}\n\nWe will reply shortly.\n\nBest regards,\nTeam`
  };

  transporter.sendMail(mailOptionsToReceiver, (err) => {
    if (err) {
      return res.status(500).send(err.toString());
    }
    transporter.sendMail(mailOptionsToUser, (err2) => {
      if (err2) {
        return res.status(500).send(err2.toString());
      }
      res.status(200).send('Emails sent successfully');
    });
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
