import React, { useState } from "react";
import List from "./components/List";
import store from "./store";
import StoreApi from "./StoreApi";
import { v4 as uuid } from "uuid";
import "./App.css";

export default function App() {
  const [data, setData] = useState(store);

  const addMoreCard = (title, listId) => {
    console.log(title, listId);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
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
      </div>
    </StoreApi.Provider>
  );
}
