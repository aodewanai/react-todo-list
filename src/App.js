import "./App.css";
import React, { useState } from "react";
import TodoList from "./todo/TodoList";
import TodoItemContext from "./todo/context";
import TodoForm from "./todo/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: "qwe", completed: false },
    // {
    //   id: 2,
    //   title: "qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty",
    //   completed: false,
    // },
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

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <>
      <TodoForm onCreate={addTodo} />
      {todos.length ? (
        <TodoItemContext.Provider value={{ removeTodo, toggleTodo }}>
          <TodoList todos={todos} />
        </TodoItemContext.Provider>
      ) : (
        <p className="d-flex justify-content-center p-3">
          you completed all tasks!! or you didn't intend to do anything..
        </p>
      )}
    </>
  );
}

export default App;
