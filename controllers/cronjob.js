const cron = require("node-cron");
const nodemailer = require("nodemailer");
const Cron = require("../models/Cron");

let messageOptions = [];

const cronn = (req, res) => {
  Cron.create({
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  })
    .then((cr) => {
      messageOptions = cr;
      return data(messageOptions);
    })
    .catch((err) => res.json(err));
};

const data = (messageOptions) => {
  let options = {
    from: messageOptions.from,
    to: messageOptions.to,
    subject: messageOptions.subject,
    text: messageOptions.text,
  };
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hemanth2gundala@gmail.com",
      pass: "Hemanth342siva",
    },
  });
  cron.schedule("* 4 * * * *", (req, res) => {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        res.json("Email sent: " + info.response);
        console.log("Email sent: " + info.response);
      }
    });
  });
};
module.exports = { cronn };
