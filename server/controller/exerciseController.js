const mongoose = require("mongoose");
const exercise = require("../models/exerciseSchema");
const userSchema = require("../models/userSchema");

//add exercise
const addExercise = async (req, res) => {
  // this is the id extracted from token  "req.data.user_id"
  const { name, description, type, duration, date } = req.body;
  try {
    if ((!name, !description, !type, !duration, !date)) {
      throw Error("Please enter all fields");
    }
    const newExercise = await exercise.create({
      name,
      description,
      type,
      duration,
      date,
    });

    await userSchema.findByIdAndUpdate(
      { _id: req.data.user_id },
      { $push: { exercises: newExercise._id } }
    );

    res.send(newExercise);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//get Exercises
const getExercises = async (req, res) => {
  const _id = req.data.user_id;
  try {
    const matchExercises = await userSchema
      .findById({ _id })
      .populate("exercises");
    res.send(matchExercises.exercises);
  } catch (e) {
    res.send({ error: e.message });
  }
};

//get Single Exercise
const singleExercise = async (req, res) => {
  const _id = req.data.user_id;
  try {
    if (!mongoose.Types.ObjectId.isValid(req.body._id)) {
      res
        .status(400)
        .send({ error: "Something went wrong with the exercise id" });
    }
    const user = await userSchema.findById(_id).populate("exercises");
    const exercises = user.exercises;
    const filteredArray = exercises.filter((exercise) => {
      return exercise._id == req.body._id;
    });
    res.status(200).send(filteredArray[0]);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const deleteExercises = async (req, res) => {
  const _id = req.data.user_id;
  try {
    const matchExercises = await userSchema
      .findById({ _id })
      .populate("exercises");

    const filterExercises = matchExercises.exercises.filter(
      (exercise) => exercise._id != req.body._id
    );

    const user = await userSchema.findByIdAndUpdate(
      { _id },
      { exercises: filterExercises }
    );
    res.send({ data: user.exercises });
  } catch (e) {
    res.send({ error: e.message });
  }
};

module.exports = { addExercise, getExercises, deleteExercises, singleExercise };
