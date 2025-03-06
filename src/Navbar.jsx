import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ChevronDown, LogOut, Settings } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Simulated authentication (replace with real auth logic)
  const isAuthenticated = true;
  const username = "DevUser";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          DevPlanner
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/tasks" className="text-white hover:text-gray-200">Tasks</Link>
          <Link to="/snippets" className="text-white hover:text-gray-200">Code Snippets</Link>
          <Link to="/journal" className="text-white hover:text-gray-200">Journal</Link>
        </div>

        {/* User Section */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-white hover:text-gray-200 focus:outline-none"
              >
                <User className="w-5 h-5 mr-2" />
                {username}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-44 text-gray-800 dark:text-gray-200">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
                  <button className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 dark:bg-gray-800 p-4 mt-2 space-y-2">
          <Link to="/tasks" className="block text-white hover:text-gray-200">Tasks</Link>
          <Link to="/snippets" className="block text-white hover:text-gray-200">Code Snippets</Link>
          <Link to="/journal" className="block text-white hover:text-gray-200">Journal</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="block text-white hover:text-gray-200">Profile</Link>
              <Link to="/settings" className="block text-white hover:text-gray-200">Settings</Link>
              <button className="block w-full text-left text-white hover:text-gray-200">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block text-white hover:text-gray-200">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
