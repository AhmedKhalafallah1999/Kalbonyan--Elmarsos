import { useState } from "react";
import Todos from "./component/Todos";
import "./App.css";
import Todo from "./component/Models/Todo";
import NewTodo from "./component/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  const addTodoHandler = (todoText: string) => {
    const newtodo = new Todo(todoText);
    setTodos((currState) => {
      return currState.concat(newtodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
