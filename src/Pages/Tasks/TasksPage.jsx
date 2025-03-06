import React, { useState } from "react";

const TasksPage = () => {
  // State to hold the tasks list and form data
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    priority: "Low",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({ id: "", title: "", description: "", dueDate: "", dueTime: "", priority: "Low" });
    setIsEditing(false);
  };

  // Handle adding a new task or editing an existing task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === formData.id ? { ...task, ...formData } : task
        )
      );
    } else {
      // Add new task
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), ...formData },
      ]);
    }
    // Reset form after submit
    setFormData({ id: "", title: "", description: "", dueDate: "", dueTime: "", priority: "Low" });
    setIsEditing(false);
  };

  // Set up editing functionality when a task is clicked
  const handleEdit = (task) => {
    setFormData({ ...task });
    setIsEditing(true);
  };

  // Handle deleting a task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to get color styles based on priority
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "High":
        return {
          backgroundColor: "rgba(239, 68, 68, .8)", // Light red with transparency
          borderColor: "#EF4444", // Red
          textColor: "#White", // Dark Red
        };
      case "Medium":
        return {
          backgroundColor: "rgba(251, 186, 26, .8)", // Light yellow with transparency
          borderColor: "#F59E0B", // Yellow
          textColor: "#B45309", // Dark yellow
        };
      case "Low":
      default:
        return {
          backgroundColor: "rgba(16, 185, 129, .8)", // Light green with transparency
          borderColor: "#10B981", // Green
          textColor: "#065F46", // Dark green
        };
    }
  };

  return (
    <div className="container mx-auto p-6 backdrop-blur-xl bg-white/30 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Tasks</h1>

      {/* Form with glassmorphism */}
      <form onSubmit={handleSubmit} className="bg-white/40 p-8 rounded-xl shadow-lg space-y-6 max-w-xl mx-auto backdrop-blur-md border border-gray-200">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Task Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter task title"
            className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Task Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter task description"
            className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-lg font-medium text-gray-700">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="dueTime" className="block text-lg font-medium text-gray-700">Due Time:</label>
          <input
            type="time"
            id="dueTime"
            name="dueTime"
            value={formData.dueTime}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="priority" className="block text-lg font-medium text-gray-700">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* Task List */}
      <h2 className="text-2xl font-semibold mt-8 text-gray-800">Task List</h2>
      <hr className="my-4 border-gray-300" />
      <button
        onClick={handleReset}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Reset
      </button>

      <ul className="mt-6 space-y-6">
        {tasks.map((task) => {
          const { backgroundColor, borderColor, textColor } = getPriorityStyles(task.priority);
          return (
            <li
              key={task.id}
              className={`flex justify-between items-center p-6 rounded-xl shadow-md ${backgroundColor} border-l-8 ${borderColor} transition-all duration-300 ease-in-out backdrop-blur-sm`}
              style={{
                backgroundColor: backgroundColor, // Apply dynamic background color
              }}
            >
              <div>
                <h3 className={`font-semibold text-xl ${textColor}`}>{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-500">{task.dueDate} at {task.dueTime}</p>
                <p className="text-sm text-gray-500">Priority: {task.priority}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TasksPage;
