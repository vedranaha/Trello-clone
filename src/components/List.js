import React, { useState } from "react";
import Card from "./Card";
import store from "../store";
import ContainerCardForm from "./ContainerCardForm";
import { Droppable, Draggable } from "react-beautiful-dnd";

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

  //Clean List
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
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div
          className="list"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div {...provided.dragHandleProps}>
            <h2 className="listTitle">{list.title} </h2>
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {list.cards.map((card, index) => (
                    <Card
                      key={card.id}
                      card={card}
                      index={index}
                      deleteCard={deleteCard}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div>
              <ContainerCardForm listId={list.id} />
              <div className="XbtnList" onClick={() => deleteList(listId)}>
                Clean list
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
