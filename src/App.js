import "./App.css";
import TodoList from "./todo/TodoList";

function App() {

  const todos=[
    {id: 1, title: 'qwe', completed: false},
    {id: 2, title: 'qwerty', completed: false},
  ]

  return <TodoList todos={todos} />;
}

export default App;
