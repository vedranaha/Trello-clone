import React from "react";

export default function Card({ card, index, id, deleteCard }) {
  return (
    <div className="task">
      {card.title}
      <div className="Xbtn" onClick={() => deleteCard(id, index)}>
        X
      </div>
    </div>
  );
}
