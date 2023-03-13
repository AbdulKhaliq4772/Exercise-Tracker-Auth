import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";

const ExerciseCard = ({ exercise }) => {
  const navigate = useNavigate();

  const [error, setError] = useState();
  const [deleteDialog, setDeleteDialog] = useState(false);

  const handleDeleteDialog = (event) => {
    event.stopPropagation();
    setDeleteDialog(!deleteDialog);
  };

  const changeDeleteDialog = () => {
    setDeleteDialog(!deleteDialog);
  };

  return (
    <>
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
            onClick={(event) => handleDeleteDialog(event, exercise)}
          >
            delete
          </button>
        </div>
        {error && <div>{error}</div>}
      </div>
      <div>
        {deleteDialog ? (
          <Dialog changeDeleteDialog={changeDeleteDialog} exercise={exercise} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ExerciseCard;
