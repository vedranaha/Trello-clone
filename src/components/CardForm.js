import React, { useState, useContext } from "react";
import StoreApi from "../StoreApi";
import { Paper, InputBase, Button } from "@material-ui/core";

export default function CardForm({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(StoreApi);
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle("");
      setOpen(false);
    }
  };

  return (
    <div className="containerCardForm">
      <div>
        <Paper className="inputCard">
          <InputBase
            multiline
            autoFocus
            placeholder={type === "card" ? "task description" : "Add list"}
            value={title}
            onChange={handleOnChange}
          />
        </Paper>
      </div>
      <div>
        <Button onClick={handleBtnConfirm}>
          {type === "card" ? "Add task" : "Add list"}
        </Button>
        <Button onClick={() => setOpen(false)}>x</Button>
      </div>
    </div>
  );
}
