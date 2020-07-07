const cron = require("node-cron");
const nodemailer = require("nodemailer");

// e-mail message options
let mailOptions = {
  from: "hemanth2gundala@gmail.com",
  to: "satyasandeep786@gmail.com",
  subject: "Email from Node-App: A Test Message!",
  text:
    "Hi Sandeep, you got a new position in our company. If you have detalis, please do not hesitate to contact us ",
};

// e-mail transport configuration
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hemanth2gundala@gmail.com",
    pass: "Hemanth342siva",
  },
});

cron.schedule("* * * * *", () => {
  // Send e-mail
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
