import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center text-center px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-white">
          Organize Your Code, Tasks & Ideas
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          A powerful notebook and planner for developers to keep track of code snippets, tasks, and projects in one place.
        </p>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link
          to="/tasks"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-500 transition"
        >
          View Tasks
        </Link>
        <Link
          to="/snippets"
          className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-md hover:bg-green-500 transition"
        >
          Code Snippets
        </Link>
        <Link
          to="/journal"
          className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-md hover:bg-purple-500 transition"
        >
          Coding Journal
        </Link>
      </motion.div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-gray-800 dark:text-gray-200"
        >
          <h3 className="text-2xl font-semibold text-blue-600">✅ Task Management</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Keep track of coding tasks, deadlines, and progress with an intuitive planner.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-gray-800 dark:text-gray-200"
        >
          <h3 className="text-2xl font-semibold text-green-600">💾 Code Snippets</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Save and organize useful code snippets for quick access and reuse.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-gray-800 dark:text-gray-200"
        >
          <h3 className="text-2xl font-semibold text-purple-600">📓 Coding Journal</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Document your learning journey, debugging experiences, and ideas.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
