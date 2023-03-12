import React, { useState } from "react";
import getCookie from "../utils/cookie";
import { useDispatch } from "react-redux";
import { changeToggle } from "../store/ToggleSlice";
import { useNavigate } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState();
  const handleDelete = async (event, exercise) => {
    event.stopPropagation();
    const response = await fetch("http://localhost:3001/deleteExercise", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: getCookie("token"),
      },
      body: JSON.stringify(exercise),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(changeToggle());
    } else {
      setError(data.error);
    }
  };

  return (
    <div
      onClick={() => {
        navigate(`/dashboard/${exercise._id}`);
      }}
      className="rounded-lg shadow-2xl bg-white my-4 py-8 px-10 flex  flex-col md:flex-row justify-between items-center"
    >
      <div>
        <h1 className=" font-bold uppercase text-2xl text-emerald-500">
          {exercise.name}
        </h1>
        <p>
          <strong>Description:</strong> {exercise.description}
        </p>
        <p>
          <strong>Activity Type: </strong>
          {exercise.type}
        </p>
        <p>
          <strong>Duration: </strong>
          {exercise.duration}
        </p>
        <p>
          <strong>Date:</strong>
          {exercise.date}
        </p>
      </div>
      <div>
        <button
          className="text-white shadow-md bg-red-400 hover:bg-red-600 uppercase font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 "
          onClick={(event) => handleDelete(event, exercise)}
        >
          delete
        </button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default ExerciseCard;
