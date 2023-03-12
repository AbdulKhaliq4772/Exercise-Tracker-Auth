const express = require("express");
const router = express.Router();
const {
  addExercise,
  getExercises,
  deleteExercises,
  singleExercise,
} = require("../controller/exerciseController");

router.post("/addExercise", addExercise);
router.get("/getExercises", getExercises);
router.delete("/deleteExercise", deleteExercises);
router.post("/:id", singleExercise);

module.exports = router;
