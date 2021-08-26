const cards = [
  {
    id: "card-1",
    title: "Swimm",
  },
  {
    id: "card-2",
    title: "Eat",
  },
  {
    id: "card-3",
    title: "sleep",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "Done",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2"],
};

export default data;
