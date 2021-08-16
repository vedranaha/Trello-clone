import React, { useState } from "react";
import "../App.css";

const TodoForm = (props) => {
  const [inputText, setInputText] = useState("");

  const manageForm = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.newTodo(inputText); //newTodo=inputText(useState) and now its added to form=>onsubmit....
      setInputText(""); //its empty when new todo is added
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <span>Add Todo</span>
        <input value={inputText} onChange={manageForm} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
