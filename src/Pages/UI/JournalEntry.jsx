// src/components/JournalEntry.jsx
import React, { useState } from 'react';

const JournalEntry = ({ entry, onSave }) => {
  const [text, setText] = useState(entry || '');

  const handleSave = () => {
    onSave(text);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your journal entry here"
        className="w-full p-2 mt-4 border border-gray-300 rounded-lg"
      />
      <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4">
        Save Entry
      </button>
    </div>
  );
};

export default JournalEntry;
// src/components/Task.jsx  