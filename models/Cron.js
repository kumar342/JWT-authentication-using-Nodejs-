const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
  {
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    subject: {
      type: String,
    },
    text: {
      type: String,
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
