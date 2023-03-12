import React, { useEffect, useState } from "react";
import getCookie from "../utils/cookie";
import ExerciseCard from "./ExerciseCard";
import { useSelector, useDispatch } from "react-redux";
import { addExercise } from "../store/exercisesSlice";

const ExerciseList = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);
  const exercise = useSelector((state) => state.exercises);
  const [error, setError] = useState();

  useEffect(() => {
    const getAllExercises = async () => {
      const response = await fetch("http://localhost:3001/getExercises", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: getCookie("token"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error);
      } else {
        dispatch(addExercise(data));
      }
    };
    getAllExercises();
  }, [toggle]);

  return (
    <div>
      <div className=" p-10">
        <div className="max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-emerald-500 uppercase">
              Exercises
            </h1>
            {exercise.map((exercise) => (
              <ExerciseCard key={exercise._id} exercise={exercise} />
            ))}
          </div>
          {error && <div>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
