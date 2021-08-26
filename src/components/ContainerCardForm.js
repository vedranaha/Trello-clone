import React, { useState } from "react";
import { Collapse } from "@material-ui/core";
import CardForm from "./CardForm";

export default function ContainerCardForm({ listId, type }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Collapse in={open}>
        <CardForm setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <div className="btnAdd" onClick={() => setOpen(!open)}>
          <span className="textBtnAdd">
            {type === "card" ? "+ Add task" : "+ Add list"}
          </span>
        </div>
      </Collapse>
    </div>
  );
}
