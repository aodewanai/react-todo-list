import "./../App.css";
import React from "react";
import propTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
  
  return (
    <ul className="list-group">
      {props.todos.map((todo, i) => {
        return (
          <TodoItem todo={todo} key={todo.id} i={i} />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
};

export default TodoList;
