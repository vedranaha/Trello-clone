import React, { useState } from "react";
import Card from "./components/Card";
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
        {" "}
        <div className="list"></div>
      </div>
    </StoreApi.Provider>
  );
}
