import React, { useState, useContext } from "react";
import StoreApi from "../StoreApi";
import { Paper, InputBase, Button } from "@material-ui/core";

export default function CardForm({ setOpen, listId }) {
  const { addMoreCard } = useContext(StoreApi);
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    addMoreCard(title, listId);
    setTitle("");
    setOpen(false);
  };

  return (
    <div className="containerCardForm">
      <div>
        <Paper className="cardForm">
          <InputBase
            multiline
            autoFocus
            placeholder={"task description"}
            value={title}
            onChange={handleOnChange}
          />
        </Paper>
      </div>
      <div>
        <Button onClick={handleBtnConfirm}>{"Add task"}</Button>
        <Button onClick={() => setOpen(false)}>x</Button>
      </div>
    </div>
  );
}
