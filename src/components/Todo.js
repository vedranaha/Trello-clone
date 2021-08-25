import React, { useState } from "react";
import "../App.css";

const Todo = (props) => {
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const edit = () => {
    setModoEdit(true);
  };

  const manageEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    //same as adding a new Todo, in App adding new function and pasing it as props
    event.preventDefault();
    props.edit(props.id, editText); //added props with id of todo task and edited text
    setEditText("");
    setModoEdit(false);
  };

  const cleanTodo = () => {
    props.clean(props.id);
  };

  return (
    <div>
      {!modoEdit ? (
        <div className="todo">
          <div>{props.todo}</div>
          <button onClick={edit}>edit</button>
          <button onClick={cleanTodo}>x</button>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input value={editText} onChange={manageEdit} />
          {""} <button>Save</button>
        </form>
      )}
    </div>
  );
};

export default Todo;
