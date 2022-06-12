import "./../App.css";
import React, { useContext } from "react";
import propTypes from "prop-types";
import TodoItemContext from "./context";

function TodoItem({ todo, i }) {
  const { removeTodo } = useContext(TodoItemContext);
  const { toggleTodo } = useContext(TodoItemContext);
  return (
    <li className="list-group-item TodoItem">
      <input
        type="checkbox"
        className="checkBox"
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? "text-decoration-line-through" : ""}>
        {" "}
        {i + 1}. {todo.title}{" "}
      </span>
      <button
        className="btn btn-outline-danger"
        onClick={() => removeTodo(todo.id)}
      >
        del
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  index: propTypes.number,
};

export default TodoItem;
