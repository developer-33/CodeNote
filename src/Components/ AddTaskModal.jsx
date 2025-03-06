// Add Task Modal Component
import React from 'react';

const AddTaskModal = ({ isOpen, onClose, onSave }) => {
  const [task, setTask] = React.useState('');

  const handleSave = () => {
    onSave(task);  // Call the parent save function
    setTask('');  // Reset input after saving
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="text-xl">Add New Task</h2>
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            className="w-full p-2 mt-4 border border-gray-300 rounded-lg"
          />
          <div className="mt-4">
            <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save Task</button>
            <button onClick={onClose} className="ml-2 bg-gray-500 text-white px-6 py-2 rounded-lg">Close</button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddTaskModal;
