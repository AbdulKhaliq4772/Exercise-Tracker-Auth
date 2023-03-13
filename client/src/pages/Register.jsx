import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleRegister = async (user) => {
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      toast.success(
        "Successfully Registered",
        {
          position: toast.POSITION.TOP_CENTER,
        },
        { autoClose: 5000 }
      );
      setTimeout(() => navigate("/login"), 1000);
    }
  };
  return <RegisterForm RegisterUser={handleRegister} error={error} />;
};

export default Register;
