const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("connected to database ");
    })
    .catch(() => {
      console.log("failed to connect ");
    });
};

module.exports.connect = connection;
