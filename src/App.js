import "./App.css";
import React, { useState } from "react";
import TodoList from "./todo/TodoList";
import TodoItemContext from "./todo/context";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "qwe", completed: false },
    {
      id: 2,
      title: "qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty",
      completed: false,
    },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodoItemContext.Provider value={{ removeTodo, toggleTodo }}>
      <TodoList todos={todos} />
    </TodoItemContext.Provider>
  );
}

export default App;
