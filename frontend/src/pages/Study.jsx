// App.jsx
import React, { useState, useEffect } from "react";

function Study() {
  const [time, setTime] = useState(0); // Start from 0 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-10 shadow-lg">Start the study session now!!</h1>
      <div className="text-7xl font-mono mb-8 shadow-lg bg-white text-gray-800 p-4 rounded-md">
        {formatTime(time)}
      </div>
      <div className="flex space-x-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transform hover:bg-green-700 hover:scale-105 transition duration-200"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transform hover:bg-yellow-700 hover:scale-105 transition duration-200"
          >
            Pause
          </button>
        )}
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg transform hover:bg-red-700 hover:scale-105 transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Study;
