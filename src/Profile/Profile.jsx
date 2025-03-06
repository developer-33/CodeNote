import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Settings, Activity, LogOut } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Simulated user data (Replace with actual user data from API)
  const user = {
    username: "DevUser",
    email: "devuser@example.com",
    bio: "Full-stack developer | Passionate about React & Tailwind CSS",
    avatar: "https://via.placeholder.com/150", // Replace with user avatar
    joined: "January 2024",
  };

  return (
    <div className="container mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center">
        {/* Avatar */}
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div className="ml-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.username}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Joined {user.joined}
          </p>
        </div>
      </div>

      {/* Tabs for Navigation */}
      <div className="mt-6 flex justify-center md:justify-start">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "profile"
              ? "bg-blue-600 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
          } rounded-l-lg`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "settings"
              ? "bg-blue-600 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "activity"
              ? "bg-blue-600 text-white"
              : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
          } rounded-r-lg`}
          onClick={() => setActiveTab("activity")}
        >
          Activity Log
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        {activeTab === "profile" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Profile Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <strong>Bio:</strong> {user.bio}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center">
              <Edit className="w-4 h-4 mr-2" /> Edit Profile
            </button>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Settings
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Manage your account settings here.
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg flex items-center">
              <Settings className="w-4 h-4 mr-2" /> Open Settings
            </button>
          </div>
        )}

        {activeTab === "activity" && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Activity Log
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Recent activity will appear here.
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg flex items-center">
              <Activity className="w-4 h-4 mr-2" /> View Logs
            </button>
          </div>
        )}
      </div>

      {/* Logout Button */}
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center">
          <LogOut className="w-5 h-5 mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
