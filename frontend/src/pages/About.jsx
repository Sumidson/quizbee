import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      
      <div className="flex flex-col items-center px-5 py-10 bg-gray-100 min-h-screen">
        
        {/* Hero Section */}
        <section className="max-w-3xl p-8 mb-12 text-center bg-white rounded-lg shadow-xl">
          <h1 className="mb-6 text-5xl font-extrabold text-gray-800">
            Welcome to <span className="text-blue-600">QuizBee</span>
          </h1>
          <p className="text-lg text-gray-600">
            Where learning meets engagement. QuizBee transforms education into an interactive experience, making it easier for both students and teachers to create, take, and track quizzes.
          </p>
        </section>

        {/* What is QuizBee Section */}
        <section className="max-w-4xl p-8 mb-12 text-center bg-white rounded-lg shadow-xl">
          <h2 className="mb-6 text-4xl font-semibold text-gray-800">What is QuizBee?</h2>
          <p className="text-base text-gray-600">
            QuizBee is a cutting-edge quiz platform designed to enhance learning. Teachers can easily create quizzes, track results, and gain valuable insights. Students can take quizzes to test their knowledge and track progress in real-time.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="max-w-4xl p-8 bg-white rounded-lg shadow-xl">
          <h2 className="mb-10 text-4xl font-semibold text-center text-gray-800">Why Choose QuizBee?</h2>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Benefit Card: For Teachers */}
            <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">For Teachers</h3>
              <p className="text-gray-700">
                Effortlessly create quizzes, manage question banks, and track student progress. QuizBee helps teachers save time, analyze performance, and focus more on teaching.
              </p>
            </div>

            {/* Benefit Card: For Students */}
            <div className="p-8 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">For Students</h3>
              <p className="text-gray-700">
                Take engaging quizzes, receive instant feedback, and monitor your improvement. QuizBee makes learning enjoyable and helps you stay motivated to grow.
              </p>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default AboutPage;
