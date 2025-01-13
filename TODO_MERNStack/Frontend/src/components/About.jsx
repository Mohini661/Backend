import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Our To-Do List App
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to the ultimate task management platform! Our To-Do List App
          is designed to help you organize, prioritize, and conquer your daily
          tasks with ease. Whether you’re managing personal errands, work
          projects, or family responsibilities, we’ve got the perfect tool for
          you.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          With a user-friendly interface and powerful features, our app ensures
          you never miss a deadline, stay productive, and achieve your goals
          seamlessly.
        </p>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Simple and intuitive task creation</li>
              <li>Prioritization and categorization options</li>
              <li>Customizable reminders and deadlines</li>
              <li>Progress tracking and analytics</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To empower individuals and teams to stay organized, productive, and
            achieve their goals with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
