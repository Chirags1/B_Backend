const userModel = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const user = await userModel.findOne({ username });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ user }, process.env.secret_key, {
            expiresIn: "1h",
          });
          return res.status(200).json({ message: "login successfully", token });
        } else {
          return res.status(401).json({ message: "Invalid credentials" });
        }
      });
    } else {
      return res.status(404).json({ message: "User not Found" });
    }
  } else {
    return res
      .status(404)
      .json({ message: "Username and password is required" });
  }
};

module.exports.createAccount = async (req, res) => {
  try {
    const { username, password } = req.body;
    const saltRounds = 10;
    if (username && password) {
      bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
        if (err) {
          // Handle error
          console.error(err);
          return res.status(400).json(err);
        }
        try {
          const user = await userModel.insertOne({
            username,
            password: hashedPassword,
          });
          if (user) {
            return res
              .status(201)
              .json({ message: "user created successfully", user });
          }
        } catch (err) {
          return res.status(400).json({ message: "username already exists" });
        }
      });
    } else {
      return res
        .status(400)
        .json({ message: "user name and password cannot be empty" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
