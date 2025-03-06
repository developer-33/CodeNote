// src/components/JournalPage.jsx
import React, { useState } from 'react';
import AddTaskModal from '../../Components/AddTaskModal';
import CalendarWithHighlights from '../../Components/CalendarWithHighlights';
import CodeSnippetEditor from '../CodingSnippetsPage/ CodeSnippetEditor';
import JournalEntry from '../UI/JournalEntry';

const JournalPage = () => {
  const [tasks, setTasks] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [journalEntry, setJournalEntry] = useState('');

  const handleTaskSave = (task) => {
    if (task.id) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  const handleJournalSave = (entry) => {
    setJournalEntry(entry);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Journal Page</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <CalendarWithHighlights tasks={tasks} onDateChange={handleDateChange} currentDate={currentDate} />
        </div>
        <div>
          <JournalEntry entry={journalEntry} onSave={handleJournalSave} />
          <div>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4">
              Add Task
            </button>
          </div>
          <div className="mt-4">
            <h3>Tasks for this day</h3>
            {tasks
              .filter((task) => new Date(task.dueDate).toDateString() === currentDate.toDateString())
              .map((task) => (
                <div key={task.id} className="p-4 bg-gray-100 mt-2 rounded-lg">
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleTaskSave} taskToEdit={currentTask} />
    </div>
  );
};

export default JournalPage;
