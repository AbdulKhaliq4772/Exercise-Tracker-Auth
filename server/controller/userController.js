const mongoose = require("mongoose");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

//Register controller
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw Error("Please fill out all fields ");
    }
    const match = await User.findOne({ email });
    if (match) {
      throw Error(" email already registered");
    }
    const user = await User.create({ name, email, password });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
//login controller
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw Error("Please fill out all fields ");
    }
    const match = await User.findOne({ email });
    if (!match) {
      throw Error("email not registered");
    }
    if (password !== match.password) {
      throw Error("password not match");
    }
    const token = jwt.sign({ user_id: match._id }, process.env.SECRET);
    res.status(200).send({ email: match.email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
//Logout controller
const userLogout = (req, res) => {
  res.clearCookie();
  res.send("Successfully logged out");
};

module.exports = { userLogin, userLogout, userRegister };
