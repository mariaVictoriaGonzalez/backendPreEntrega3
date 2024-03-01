import nodemailer from "nodemailer";
import config from "../config/config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: config.gmailAccount,
    pass: config.gmailAppPassword,
  },
});

transporter.verify(function (error, succes) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to send ticket by email.");
  }
});

const mailOptions = {
  from: "Coder ecommerce - " + config.gmailAccount,
  to: `${req.user.email}`,
  subject: "Ticket de compra",
  html: `<div><h1> Ticket de compra: </h1><p>${JSON.stringify(newTicket)}</p></div>`,
  attachments: [],
};

export const sendTicketByEmail = (req, res) => {
  try {
    let result = transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(400).send({ message: "Error", payload: error });
      }
      console.log("Message sent: %s", info.messageId);
      res.send({ message: "Success", payload: info });
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({
        error: error,
        message: "No se pudo enviar el email desde:" + config.gmailAccount,
      });
  }
};
