import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ RegisterUser, error }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const user = { name, email, password };
    RegisterUser(user);
  };

  return (
    <div className="h-96 py-16 px-5">
      <div className="bg-white  max-w-screen-sm mx-auto rounded-lg px-10 py-8  shadow-xl border border-gray-200 ">
        <form onSubmit={submitHandler}>
          <h1 className=" text-2xl font-semibold uppercase">Register Form</h1>
          <div className="flex flex-col py-3">
            <label className=" font-semibold capitalize">Name</label>
            <input
              className="my-3 p-2 rounded-lg bg-emerald-50"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex flex-col py-3">
            <label className=" font-semibold capitalize">email</label>
            <input
              className="my-3 p-2 rounded-lg bg-emerald-50"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col py-3 ">
            <label className=" font-semibold capitalize">password</label>
            <input
              className="my-3 p-2 rounded-lg bg-emerald-50"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            className="text-white shadow-md bg-emerald-400 hover:bg-emerald-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            type="submit"
          >
            Register
          </button>
          <Link to="/login">Already registered?</Link>
        </form>
        {error && (
          <div className=" text-red-500 font-semibold text-center uppercase">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
