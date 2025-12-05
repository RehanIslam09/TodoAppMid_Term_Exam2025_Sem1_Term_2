import React from 'react';
import TodoItem from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

export default function TodoList({ todos, setTodos }) {
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    // Play sound when marking as completed
    const changedTodo = todos.find((t) => t.id === id);
    if (changedTodo && !changedTodo.completed) {
      const audio = new Audio('/sounds/ding.mp3');
      audio.volume = 0.4;
      audio.play();
    }
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  if (todos.length === 0) return null;

  return (
    <motion.div layout className="mt-6 flex flex-col gap-3">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
