import React, { useState } from "react";
import Card from "./Card";
import store from "../store";
import ContainerCardForm from "./ContainerCardForm";

export default function List({ list, index, listId }) {
  const [data, setData] = useState(store);

  //delete Card
  const deleteCard = (id, index) => {
    const newListCards = data.lists[listId].cards.splice(index, 1);

    console.log(listId);
    console.log(index);

    const list = data.lists[listId];
    const cards = data.lists[listId].cards;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  //Delete List
  const deleteList = (index) => {
    data.lists[listId].cards.splice(index);

    console.log(listId);

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
      <div>
        <ContainerCardForm listId={list.id} type="card" />
        <div className="XbtnList" onClick={() => deleteList(listId)}>
          Clean list
        </div>
      </div>
    </div>
  );
}
