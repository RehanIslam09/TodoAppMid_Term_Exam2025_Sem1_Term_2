import { useState, useEffect } from 'react';
import './App.css';
import { Navbar, TodoInput, TodoList } from './Components';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-8 text-white">
      <Navbar clearAll={() => setTodos([])} />

      <div className="mx-auto mt-8 max-w-2xl">
        <TodoInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
