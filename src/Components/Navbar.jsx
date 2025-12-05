import React from 'react';

export default function Navbar() {
  return (
    <nav className="mb-8 w-full px-4 py-4">
      <div className="mx-auto max-w-6xl rounded-xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg">
              <span className="text-lg font-bold text-white">T</span>
            </div>
            <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              Taskify
            </h1>
          </div>

          {/* Clear All Button */}
          <button className="cursor-pointer rounded-lg border border-white/20 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2.5 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-200 ease-out hover:scale-105 hover:shadow-xl active:scale-95">
            Clear All Tasks
          </button>
        </div>
      </div>
    </nav>
  );
}
