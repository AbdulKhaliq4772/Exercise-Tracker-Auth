const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  exercises: [
    {
      ref: "Exercise",
      type: mongoose.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
