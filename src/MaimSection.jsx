import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import TasksPage from './Pages/Tasks/TasksPage'; // Import TasksPage
import CodeSnippetsPage from './Pages/CodingSnippetsPage/CodeSnippetsPage'; // Import CodeSnippetsPage
import JournalPage from './Pages/UI/Journal'; // Import JournalPage
import Home from './Pages/UI/Home';
import Profile from './Profile/Profile';

function MaimSection() {
  return (
<div>

  <Navbar />



   <Routes>
      {/* Add Navbar to be shown on all pages */}
      

      {/* Define the routes */}
    
        <Route path="/" element={<Home />}  />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/snippets" element={<CodeSnippetsPage />} />
        <Route path="/journal" element={<JournalPage />} /> {/* Add Journal Page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
  </div>
  );
}

export default MaimSection;

