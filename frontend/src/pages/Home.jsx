import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

function Home() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  return (
    <div>
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
          <div className="container px-8 mx-auto text-center">
            <h1 className="mb-6 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Welcome to Quizy
            </h1>
            <p className="mb-12 text-xl text-gray-700">
              Your go-to platform to test knowledge, challenge friend!
            </p>
            <div className="flex justify-center gap-6">
              <a
                onClick={() => {
                  if (role === "teacher") {
                    navigate("/teacher-dashboard");
                  } else if (role === "student") {
                    navigate("/student-dashboard");
                  }
                }}
                className="px-8 py-4 font-semibold text-decoration-none text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:scale-105 transition-all duration-300 transform"
              >
                Dashboard
              </a>
              <a
                onClick={() => {
                  navigate("/all-quizes");
                }}
                className="px-8 py-4 font-semibold text-decoration-none text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-md hover:scale-105 transition-all duration-300 transform"
              >
                Take a Quiz
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
            What We Do
          </h2>
          <div className="grid gap-12 text-center md:grid-cols-3">
            <div className="p-10 transition-transform duration-200 ease-in-out transform bg-white border border-gray-300 rounded-lg shadow-xl cursor-pointer hover:scale-105">
              <div className="mb-4 text-5xl text-blue-600">📚</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Engaging Quizzes</h3>
              <p className="text-gray-600">
                Take quizzes on various topics to test your knowledge, sharpen
                your skills, and learn in a fun way.
              </p>
            </div>

            <div className="p-10 transition-transform duration-200 ease-in-out transform bg-white border border-gray-300 rounded-lg shadow-xl cursor-pointer hover:scale-105">
              <div className="mb-4 text-5xl text-blue-600">🏆</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Study Session</h3>
              <p className="text-gray-600">
                Compete with others and track your progress. Climb the
                leaderboard and show off your achievements!
              </p>
            </div>

            <div className="p-10 transition-transform duration-200 ease-in-out transform bg-white border border-gray-300 rounded-lg shadow-xl cursor-pointer hover:scale-105">
              <div className="mb-4 text-5xl text-blue-600">💡</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Track Your Progress</h3>
              <p className="text-gray-600">
                Keep track of the quizzes you've taken, your scores, and see how
                you improve over time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Ready to Test Your Knowledge?
          </h2>
          <p className="mb-10 text-xl text-gray-700">
            Join Quizy today and dive into the world of fun and learning!
          </p>
          <a
            href="/signup"
            className="px-12 py-4 text-decoration-none text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform"
          >
            Sign Up Now
          </a>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
