const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
  {
    type: {
      type: number,
      unique: false,
      required: true,
    },
    message: {
      type: String,
      unique: false,
      required: true,
    },
    subject: {
      type: String,
      required: true,
      unique: false,
    },
    to: {
      type: String,
      unique: true,
    },
    schedule: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { versionKey: false },
  {
    id: false,
    toObject: {
      virtuals: true,
      getters: true,
    },
    toJSON: {
      virtuals: true,
      getters: true,
      setters: false,
    },
  }
);

UserSchema.plugin(uniqueValidator, {
  type: "mongoose-unique-validator",
  message: "Error, expected {PATH} to be unique.",
});

const Cron = mongoose.model("Cron", UserSchema);

module.exports = Cron;
