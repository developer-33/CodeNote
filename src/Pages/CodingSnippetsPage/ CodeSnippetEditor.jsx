import React, { useState, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import { Save, Trash, Code } from "lucide-react";

const languages = ["javascript", "python", "html", "css", "cpp"];

const CodeSnippetEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  // Load saved snippet from localStorage on mount
  useEffect(() => {
    const savedSnippet = localStorage.getItem("savedSnippet");
    if (savedSnippet) {
      setCode(savedSnippet);
    }
  }, []);

  // Handle code change
  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  // Save snippet to localStorage
  const saveSnippet = () => {
    localStorage.setItem("savedSnippet", code);
    alert("Snippet saved!");
  };

  // Clear snippet
  const clearSnippet = () => {
    setCode("");
    localStorage.removeItem("savedSnippet");
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold flex items-center">
          <Code className="w-6 h-6 mr-2" /> Code Snippet Editor
        </h2>
        <div className="flex space-x-2">
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white px-3 py-1 rounded-lg"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
          {/* Save Button */}
          <button
            onClick={saveSnippet}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center"
          >
            <Save className="w-5 h-5 mr-2" /> Save
          </button>
          {/* Clear Button */}
          <button
            onClick={clearSnippet}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center"
          >
            <Trash className="w-5 h-5 mr-2" /> Clear
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <MonacoEditor
        height="400"
        language={language}
        value={code}
        onChange={handleCodeChange}
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          theme: "vs-dark",
        }}
      />
    </div>
  );
};

export default CodeSnippetEditor;
