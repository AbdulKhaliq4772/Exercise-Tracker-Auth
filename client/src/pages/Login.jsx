import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/UserSlice";
import LoginForm from "../components/Login";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [cookies, setCookies] = useCookies("token");

  const handleLogin = async (user) => {
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
      navigate("/dashboard");
      dispatch(loginSuccess(data));
    }
  };

  return <LoginForm handleLogin={handleLogin} error={error} />;
};

export default Login;
