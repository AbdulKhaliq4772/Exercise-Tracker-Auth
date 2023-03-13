import React from "react";
import { useDispatch } from "react-redux";
import { changeToggle } from "../store/ToggleSlice";
import getCookie from "../utils/cookie";

const Dialog = ({ changeDeleteDialog, exercise }) => {
  const dispatch = useDispatch();
  const handleDelete = async (exercise) => {
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
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
      className=" bg-emerald-50 max-w-screen-md rounded-lg shadow-lg flex flex-col justify-around items-center px-5 py-6"
    >
      <div className=" my-3 text-center">
        <p>Are you sure to delete this exercise?</p>
      </div>
      <div className=" flex flex-col md:flex-row ">
        <button
          className=" bg-red-500 capitalize hover:bg-red-600 text-white rounded-md p-2 mx-4 shadow-lg my-3 md:my-0"
          onClick={() => handleDelete(exercise)}
        >
          Delete
        </button>
        <button
          className=" bg-green-500 capitalize hover:bg-green-600 text-white rounded-md p-2 mx-4 shadow-lg"
          onClick={() => changeDeleteDialog()}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Dialog;
