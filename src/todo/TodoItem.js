import "./../App.css";
import React from "react";

function TodoItem({todo, i}) {
  return (
    <h1><strong>{i + 1}</strong> {todo.title}</h1>
  );
}

export default TodoItem;
