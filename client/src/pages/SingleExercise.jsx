import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import getCookie from "../utils/cookie";
import { useCookies } from "react-cookie";
import SingleExercise from "../components/SingleExercise";

const Exercise = () => {
  const [cookies] = useCookies("token");
  if (!getCookie("token")) {
    return <Navigate to="/login" />;
  }

  const { _id } = useParams();
  const [responseData, setResponseData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getSingleExerciseData = async () => {
      const response = await fetch("http://localhost:3001/singleExercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: getCookie("token"),
        },
        body: JSON.stringify({ _id: _id }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error);
      } else {
        setResponseData(data);
      }
    };
    getSingleExerciseData();
  }, []);

  return (
    <div>
      <SingleExercise data={responseData} error={error} />
    </div>
  );
};

export default Exercise;
