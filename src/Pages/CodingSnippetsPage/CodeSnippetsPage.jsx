import React, { useState, useEffect } from "react";
import axios from "axios";
import MonacoEditor from "@monaco-editor/react";
import { Save, Trash, Code } from "lucide-react";

const API_URL = "http://localhost:5000/snippets"; // Your backend URL

const languages = ["javascript", "python", "html", "css", "cpp"];

const CodeSnippetsPage = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");
  const [title, setTitle] = useState("");
  const [snippets, setSnippets] = useState([]);

  // Fetch saved snippets from the backend on mount
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setSnippets(response.data))
      .catch((error) => console.error("Error loading snippets:", error));
  }, []);

  // Handle code change
  const handleEditorChange = (value) => setCode(value);

  // Save snippet to database
  const saveSnippet = async () => {
    if (!title) {
      alert("Please enter a title before saving!");
      return;
    }
    
    try {
      const response = await axios.post(API_URL, {
        title,
        code,
        language,
      });
      setSnippets([...snippets, response.data]); // Update UI
      alert("Snippet saved!");
    } catch (error) {
      console.error("Error saving snippet:", error);
    }
  };

  // Delete a snippet
  const deleteSnippet = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSnippets(snippets.filter((snippet) => snippet.id !== id)); // Update UI
      alert("Snippet deleted!");
    } catch (error) {
      console.error("Error deleting snippet:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          <Code className="w-7 h-7 mr-2" /> Code Snippets
        </h1>
      </div>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter snippet title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />

      {/* Language Selector */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-3 p-2 border rounded"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Monaco Editor */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <MonacoEditor
          height="500px"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={handleEditorChange}
          options={{
            selectOnLineNumbers: true,
            minimap: { enabled: true },
            fontSize: 14,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="mt-4 flex space-x-4">
        <button
          onClick={saveSnippet}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-lg flex items-center"
        >
          <Save className="w-5 h-5 mr-2" /> Save Snippet
        </button>
      </div>

      {/* Snippet List */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Saved Snippets:</h2>
        {snippets.length === 0 ? (
          <p className="text-gray-500">No saved snippets yet.</p>
        ) : (
          <ul>
            {snippets.map((snippet) => (
              <li
                key={snippet.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md mb-3 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">{snippet.title}</h3>
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap">{snippet.code}</pre>
                </div>
                <button
                  onClick={() => deleteSnippet(snippet.id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 text-white rounded-lg flex items-center"
                >
                  <Trash className="w-5 h-5 mr-2" /> Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CodeSnippetsPage;

