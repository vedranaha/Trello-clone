import React, { useState } from "react";
import Card from "./Card";
import store from "../store";

export default function List({ list, index, listId }) {
  const [data, setData] = useState(store);

  const deleteCard = (id, index) => {
    const list = data.lists[listId];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  return (
    <div className="list">
      <h1 className="listTitle">{list.title} </h1>
      {list.cards.map((card, index) => (
        <Card key={card.id} card={card} index={index} deleteCard={deleteCard} />
      ))}
    </div>
  );
}
