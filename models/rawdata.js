// const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

// const UserSchema = new mongoose.Schema(
//   {
//     firstNumber: {
//       type: Number,
//       unique: false,
//       required: true,
//     },
//     secondNumber: {
//       type: Number,
//       unique: false,
//       required: true,
//     },
//   },
//   { versionKey: false },
//   {
//     id: false,
//     toObject: {
//       virtuals: true,
//       getters: true,
//     },
//     toJSON: {
//       virtuals: true,
//       getters: true,
//       setters: false,
//     },
//   }
// );

// UserSchema.plugin(uniqueValidator, {
//   type: "mongoose-unique-validator",
//   message: "Error, expected {PATH} to be unique.",
// });

// const Rawdata = mongoose.model("Rawdata", UserSchema);

// module.exports = Rawdata;
