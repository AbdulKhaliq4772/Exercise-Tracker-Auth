import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const totalExercises = useSelector((state) => state.exercises);
  const { user } = useSelector((state) => state.users);
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-around">
      <div className=" bg-emerald-100 my-3 lg:my-0 shadow-2xl rounded-3xl max-w-screen-sm p-6 font-semibold uppercase text-xl ">
        Welcome, {user.email}
      </div>
      <div className=" bg-amber-100 my-3 lg:my-0 shadow-2xl rounded-3xl max-w-screen-sm p-6 font-semibold uppercase ">
        <p>Total Exercises</p>
        <p className="text-5xl font-bold text-center">
          {totalExercises.length}
        </p>
      </div>
    </div>
  );
};

export default Profile;
