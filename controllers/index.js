const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const users = (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.send(error);
    });
};

const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          console.log(result);

          if (result == true) {
            let token = jwt.sign({ user }, "my-secret-key");
            return res.json({
              success: true,
              user: {
                name: user.name,
                mobile: user.mobile_number,
                email: user.email,
                city: user.city,
                token: token,
              },
            });
          }
          return res.json({ error: "password mismatch" });
        });
      } else return res.json({ error: "no user found" });
    })
    .catch((error) => {
      res.send(error);
    });
};

const register = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.json({ error: "user already exists" });
      } else {
        let saltRounds = 5;

        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
          User.create({
            email: req.body.email,
            password: hash,
            name: req.body.name,
            city: req.body.city,
            mobile_number: req.body.mobile_number,
          })
            .then((users) => {
              console.log(users);

              res.json(users);
            })
            .catch((error) => {
              return { error };
            });
        });
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

const getUserById = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = { users, login, register, getUserById };
