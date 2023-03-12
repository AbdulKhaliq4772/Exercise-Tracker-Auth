import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeToggle } from "../store/ToggleSlice";
import getCookie from "../utils/cookie";

const AddExerciseForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();
  const [duration, setDuration] = useState();
  const [date, setDate] = useState();
  const [error, setError] = useState();

  const formData = {
    name,
    description,
    type,
    duration,
    date,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/addExercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: getCookie("token"),
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      dispatch(changeToggle());
    }
  };
  return (
    <div className="bg-white shadow-2xl rounded-lg py-10 px-16 max-w-screen-sm lg:w-full mx-auto lg:mx-0">
      <form onSubmit={handleSubmit}>
        <h1 className=" font-semibold text-xl uppercase">Add Exercise</h1>
        <div className="flex flex-col my-4">
          <label className=" font-semibold">Name</label>
          <input
            className=" bg-emerald-50 py-2 px-1 rounded-md my-2"
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Description</label>
          <input
            className=" bg-emerald-50 py-2 px-1 rounded-md my-2"
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Activity Type</label>
          <select
            className=" bg-emerald-50 py-2 px-1 rounded-md my-2"
            onChange={(e) => {
              setType(e.target.value);
            }}
            id="activity-type"
          >
            <option value="">Enter activity</option>
            <option value="run">Run</option>
            <option value="hike">Hike</option>
            <option value="bike">Bike</option>
            <option value="bicycle">bicycle</option>
            <option value="walk">Walk</option>
            <option value="swim">Swim</option>
          </select>
        </div>
        <div className="flex flex-col my-4">
          <label>Duration (in min)</label>
          <input
            className=" bg-emerald-50 py-2 px-1 rounded-md my-2"
            type="number"
            name="type"
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            value={duration}
          />
        </div>
        <div className="flex flex-col my-4">
          <label>Date</label>
          <input
            className=" bg-emerald-50 py-2 px-1 rounded-md my-2"
            type="date"
            name="type"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />
        </div>
        <button
          className="text-white shadow-md bg-emerald-400 hover:bg-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          type="submit"
        >
          Add
        </button>
      </form>
      {error && (
        <div className=" text-red-500 font-semibold text-center uppercase">
          {error}
        </div>
      )}
    </div>
  );
};

export default AddExerciseForm;
