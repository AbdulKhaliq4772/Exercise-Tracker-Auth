import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AddExerciseForm from "../components/addExerciseForm";
import getCookie from "../utils/cookie";
import ExerciseList from "../components/ExerciseList";
import Profile from "../components/Profile";
import { useCookies } from "react-cookie";
import SmallForm from "../components/SmallForm";
import Logout from "../components/Logout";
import Dialog from "../components/Dialog";

const Dashboard = () => {
  const [cookies] = useCookies("token");
  if (!cookies.token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col">
      <div className="p-6">
        <Profile />
      </div>
      <div className="lg:hidden">
        <SmallForm />
      </div>
      <div className="flex   flex-col lg:flex-row">
        <div className="  lg:w-2/3">
          <ExerciseList />
        </div>
        <div className="lg:w-1/3 p-6 hidden lg:block">
          <AddExerciseForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
