import React, { useState } from "react";
import TodoForm from "./components/Todoform";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [listTodos, setListTodos] = useState([]);

  const newTodo = (todo) => {
    setListTodos([todo, ...listTodos]);
  };

  const clean = (id) => {
    const listFiltered = listTodos.filter((e, index) => index !== id);
    setListTodos(listFiltered);
  };

  const updateTodo = (id, todo) => {
    const listUpdated = listTodos.map((e, index) => {
      if (index === id) {
        e = todo;
      }

      return e;
    });

    setListTodos(listUpdated);
  };

  return (
    <div className="App">
      <TodoForm newTodo={newTodo} />

      <div className="list">
        {listTodos.map((e, index) => (
          <Todo todo={e} clean={clean} id={index} edit={updateTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
