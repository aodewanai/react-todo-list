import "./../App.css";
import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="TodoList">
      {props.todos.map((todo, i) => {
        return <TodoItem todo={todo} key={todo.id} i={i}/>;
      })}
    </div>
  );
}

export default TodoList;
