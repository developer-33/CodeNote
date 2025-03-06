// src/ThemeToggle.js
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set initial mode based on system preference or localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update localStorage and body class when mode changes
  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('mode', 'dark');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      localStorage.setItem('mode', 'light');
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
