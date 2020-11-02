import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { TodoForm } from "./components/todoform";
import { TodoList } from "./components/todolis";
import { ITodo } from "./interfaces";

// FC - FunctionComponent

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    //  setTodos([newTodo, ...todos]);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
