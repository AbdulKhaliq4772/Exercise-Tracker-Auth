const express = require("express");
const router = express.Router();
const {
  userLogin,
  userRegister,
  userLogout,
} = require("../controller/userController");

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/logout", userLogout);

module.exports = router;
