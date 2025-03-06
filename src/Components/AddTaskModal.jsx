// src/components/AddTaskModal.jsx
import React, { useState } from 'react';

const AddTaskModal = ({ isOpen, onClose, onSave, taskToEdit }) => {
  const [task, setTask] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');

  const handleSave = () => {
    onSave({ ...taskToEdit, title: task, description });
    setTask('');
    setDescription('');
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <h2 className="text-xl">{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task Title"
            className="w-full p-2 mt-4 border border-gray-300 rounded-lg"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="w-full p-2 mt-4 border border-gray-300 rounded-lg"
          />
          <div className="mt-4">
            <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Save Task
            </button>
            <button onClick={onClose} className="ml-2 bg-gray-500 text-white px-6 py-2 rounded-lg">
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddTaskModal;
