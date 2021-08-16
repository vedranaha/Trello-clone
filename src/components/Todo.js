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
    event.preventDefault();
    props.edit(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  const cleanTodo = () => {
    props.clean(props.id);
  };

  return (
    <div>
      {!modoEdit ? (
        <div className="Todo">
          <span>{props.Todo}</span>
          <span onClick={edit}>edit</span>
          <span onClick={cleanTodo}>clean</span>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input value={editText} onChange={manageEdit} /> <button>Save</button>
        </form>
      )}
    </div>
  );
};

export default Todo;
