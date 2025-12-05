import React, { useState } from 'react';

export default function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="mb-6 flex items-center gap-3">
      {/* Input Box */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="Add a new task..."
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {/* Add Button */}
      <button
        onClick={handleAdd}
        className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 active:scale-95"
      >
        Add
      </button>
    </div>
  );
}
