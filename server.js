const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
let routes = require("./routes");
const bodyParser = require("body-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const helmet = require("helmet");
const bearerToken = require("express-bearer-token");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 8000;

const { connection } = require("./config/db");

// // // Init Middleware
// app.use(cors());
// app.use(express.json({ extended: false }));
// app.use(accessControlAllow.allow);

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// add token middleware in the express application
app.use(bearerToken());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected");
});
connection.on("error", (e) => console.log("error"));

app.use("/", routes);

// e-mail message options
// let mailOptions = {
//   from: "hemanth2gundala@gmail.com",
//   to: "manojobbilisetty@gmail.com",
//   subject: "For Manoj",
//   text: " Babaaaaaiiiiiii   sry Babai  ",
// };

// // e-mail transport configuration
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "hemanth2gundala@gmail.com",
//     pass: "Hemanth342siva",
//   },
// });

// cron.schedule("1 * *  * *", () => {
//   // Send e-mail
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
