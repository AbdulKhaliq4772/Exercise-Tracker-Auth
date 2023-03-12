import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();

  const handleLogout = () => {
    removeCookie("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <button
        className="  bg-amber-100 p-3 rounded-xl shadow-lg hover:bg-amber-200 uppercase font-semibold"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
