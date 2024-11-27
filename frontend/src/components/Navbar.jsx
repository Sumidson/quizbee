import React from "react";
import { useNavigate } from "react-router";
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-md bg-white/10 backdrop-blur-lg">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          <div className="text-3xl font-extrabold cursor-pointer">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              QuizBee
            </div>
          </div>

          <div className="hidden space-x-8 ml-36 md:flex">
            <a
              href="/"
              className="text-lg text-white no-underline hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              onClick={() => {
                navigate("/all-quizes");
              }}
              className="text-lg text-white no-underline cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            >
              Quizzes
            </a>
            <a
              href="/study-session"
              className="text-lg text-white no-underline hover:text-yellow-400 transition-colors duration-300"
            >
              Study-Session
            </a>
            <a
              href="/about"
              className="text-lg text-white no-underline hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="/login"
              className="px-4 py-2 font-semibold text-teal-700 no-underline bg-white rounded-lg hover:bg-teal-300 transition-colors duration-300"
            >
              Login
            </a>
            <div
              onClick={() => {
                navigate("/register");
              }}
              className="px-4 py-2 font-semibold text-white no-underline bg-teal-500 rounded-lg cursor-pointer hover:bg-teal-700 transition-colors duration-300"
            >
              Sign Up
            </div>
            <div
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                alert("You have been logged out of Quizy. Have a nice day!");
              }}
              className="mt-1 cursor-pointer text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <IoLogOutOutline size={30} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;