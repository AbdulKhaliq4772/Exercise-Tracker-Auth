import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/4.jpg";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("navigated to register page");
    navigate("/register");
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" h-screen bg-no-repeat bg-center bg-contain bg-white p-20 flex flex-col items-center  justify-start"
      >
        <h3 className=" font-extrabold text-5xl text-black text-center">
          Welcome Here
        </h3>
        <button
          className="text-white uppercase my-5 text-center shadow-md bg-emerald-400 hover:bg-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          type="submit"
          onClick={handleSubmit}
        >
          want to use this app?
        </button>
      </div>
    </div>
  );
};

export default Home;
