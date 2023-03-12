const checkingToken = (req, res, next) => {
  console.log(req.headers["authorization"]);
  const token = req.headers["authorization"];
  if (!token) {
    res.json("Please Login");
  } else {
    JWT.verify(token, process.env.SECRET, (err, data) => {
      if (err) {
        res.json("Something went wrong");
      } else {
        req.data = data;
        next();
      }
    });
  }
};

module.exports = checkingToken;
