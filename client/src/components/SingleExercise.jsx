import React from "react";
import { useNavigate } from "react-router-dom";
import cycleImage from "../images/ICONS/cycle.png";
import walkImage from "../images/ICONS/walk.png";
import hikeImage from "../images/ICONS/hike.png";
import rideImage from "../images/ICONS/ride.png";
import swimImage from "../images/ICONS/swim.png";
import runImage from "../images/ICONS/run.png";
import SingleExerciseImage from "./SingleExerciseImage";

const SingleExercise = ({ data, error }) => {
  const navigate = useNavigate();
  {
    data.type == "bicycle"
      ? (Image = cycleImage)
      : data.type == "hike"
      ? (Image = hikeImage)
      : data.type == "swim"
      ? (Image = swimImage)
      : data.type == "bike"
      ? (Image = rideImage)
      : data.type == "walk"
      ? (Image = walkImage)
      : data.type == "run"
      ? (Image = runImage)
      : "";
  }
  return (
    <div className="  p-10">
      {!error ? (
        <div className=" bg-amber-100 mx-auto rounded-xl shadow-lg max-w-screen-lg p-10 ">
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className=" bg-emerald-200 py-2 shadow-md px-6 mb-3 rounded-md hover:bg-emerald-300"
          >
            Back
          </button>
          <div className="flex flex-col items-center md:flex-row md:justify-around ">
            <div>
              <h1 className=" text-4xl font-extrabold uppercase text-emerald-400">
                {data.name}
              </h1>
              <p className=" text-xl font-semibold">{data.description}</p>
              <p className=" text-xl font-semibold">{data.type}</p>
              <p className=" text-xl font-semibold">{data.duration}</p>
              <p className=" text-xl font-semibold">{data.date}</p>
            </div>
            <SingleExerciseImage ImageName={Image} />
          </div>
        </div>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default SingleExercise;
