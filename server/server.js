const express = require("express");
const database = require("./configuration/database");
const dotenv = require("dotenv").config();
const cors = require("cors");
const JWT = require("jsonwebtoken");
const userRouter = require("./routes/userRoutes");
const exerciseRouter = require("./routes/exerciseRoutes");
const app = express();

//connecting database
database.connect();
//middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(
  ["/addExercise", "/getExercises", "/deleteExercise", "/singleExercise"],
  (req, res, next) => {
    // console.log(req.headers["authorization"]);
    const token = req.headers["authorization"];
    if (!token) {
      res.json("Please Login");
    } else {
      JWT.verify(token, process.env.SECRET, (err, data) => {
        if (err) {
          res.json("Something went wrong with the login");
        } else {
          req.data = data;
          next();
        }
      });
    }
  }
);

app.use("/", userRouter);

app.use("/", exerciseRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `server listening on port http://${process.env.HOST}:${process.env.PORT}`
  );
});
