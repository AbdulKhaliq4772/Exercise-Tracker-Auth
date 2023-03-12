import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const cookie = cookies.token;
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-around shadow-md py-8">
      <Link className=" uppercase text-2xl font-bold" to="/">
        Exercise Tracker App
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-emerald-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-emerald-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-emerald-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-emerald-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {!cookie ? (
              <ul className="flex flex-col items-center justify-between min-h-[250px] text-emerald-400 uppercase font-semibold">
                <li>
                  <Link to="/" onClick={() => setIsNavOpen((prev) => !prev)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col items-center justify-between min-h-[250px] text-emerald-400 uppercase font-semibold">
                <li>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    dashboard
                  </Link>
                </li>
                <li onClick={() => setIsNavOpen((prev) => !prev)}>
                  <Logout />
                </li>
              </ul>
            )}
          </div>
        </section>

        {!cookie ? (
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-emerald-400 uppercase font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        ) : (
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex lg:items-center text-emerald-400 uppercase font-semibold">
            <li>
              <Link
                to="/dashboard"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                dashboard
              </Link>
            </li>
            <li onClick={() => setIsNavOpen((prev) => !prev)}>
              <Logout />
            </li>
          </ul>
        )}
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Header;
