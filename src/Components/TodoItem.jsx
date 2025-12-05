import React from 'react';
import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="group flex w-full items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-md"
    >
      {/* Left side: checkbox + text */}
      <div className="flex items-center gap-3">
        {/* Custom Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex h-6 w-6 items-center justify-center rounded-lg border-2 transition-all ${
            todo.completed
              ? 'border-green-400 bg-green-500/80'
              : 'border-white/40 bg-transparent'
          } `}
        >
          {todo.completed && <Check size={16} className="text-white" />}
        </button>

        {/* Todo Text */}
        <span
          className={`text-lg transition-all ${
            todo.completed ? 'text-white/40 line-through' : 'text-white'
          }`}
        >
          {todo.text}
        </span>
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-400 opacity-0 transition-all group-hover:opacity-100 hover:text-red-500"
      >
        <Trash2 size={20} />
      </button>
    </motion.div>
  );
}
