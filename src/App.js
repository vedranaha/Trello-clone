import React, { useState } from "react";
import List from "./components/List";
import store from "./store";
import StoreApi from "./StoreApi";
import { v4 as uuid } from "uuid";
import "./App.css";
import ContainerCardForm from "./components/ContainerCardForm";

export default function App() {
  const [data, setData] = useState(store);

  const addMoreCard = (title, listId) => {
    console.log(title, listId);

    const newCardId = uuid();
    console.log(newCardId);
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList }}>
      <div className="App">
        {data.listIds.map((listId, index) => {
          const list = data.lists[listId];
          return (
            <List list={list} key={listId} index={index} listId={listId} />
          );
        })}
        <ContainerCardForm type="list" />
      </div>
    </StoreApi.Provider>
  );
}
