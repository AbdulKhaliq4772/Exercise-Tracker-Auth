import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/UserSlice";
import LoginForm from "../components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies("token");

  const handleLogin = async (user) => {
    console.log(user);
    const response = await fetch(" http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setCookies("token", data.token);
      toast.success(
        "Successfully Login",
        {
          position: toast.POSITION.TOP_CENTER,
        },
        { autoClose: false }
      );
      setTimeout(() => navigate("/dashboard"), 1000);
      dispatch(loginSuccess(data));
      localStorage.setItem("user", data.email);
    }
  };

  return (
    <>
      <LoginForm handleLogin={handleLogin} error={error} />
      <ToastContainer />
    </>
  );
};

export default Login;
