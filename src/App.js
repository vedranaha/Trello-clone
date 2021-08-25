import React, { useState } from "react";
import TodoForm from "./components/Todoform";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [listTodos, setListTodos] = useState([]);

  const newTodo = (card) => {
    setListTodos([card, ...listTodos]);
  };

  const clean = (id) => {
    const listFiltered = listTodos.filter((e, index) => index !== id);
    setListTodos(listFiltered);
  };

  const updateTodo = (id, card) => {
    const listUpdated = listTodos.map((e, index) => {
      if (index === id) {
        e = card;
      }

      return e;
    });

    setListTodos(listUpdated);
  };

  return (
    <div className="App">
      <div className="list">
        <TodoForm newTodo={newTodo} />

        {listTodos.map((e, index) => (
          <Card card={e} clean={clean} id={index} edit={updateTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
