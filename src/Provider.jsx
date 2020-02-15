import React from "react";
import uuid from "uuid";

export const Context = React.createContext();
const cardsList = [
  {
    type: "task",
    summary: "Click on an issue to see what's behind it.",
    description: "",
    reporter: "Lord Gaben",
    assignees: ["Prickle Rick"],
    priority: "low",
    id: uuid()
  },
  {
    type: "task",
    summary: "Each issue can be assigned priority from lowest to highest.",
    description: "",
    reporter: "Lord Gaben",
    assignees: [],
    priority: "highest",
    id: uuid()
  },
  {
    type: "task",
    summary: "Try leaving a comment on this issue.",
    description: "",
    reporter: "Pickle Rick",
    assignees: ["Baby Yoda"],
    priority: "medium",
    id: uuid()
  },
  {
    type: "story",
    summary:
      "Each issue has a single reporter but can have multiple assignees.",
    description: "",
    reporter: "Baby Yoda",
    assignees: ["Baby Yoda", "Lord Gaben"],
    priority: "high",
    id: uuid()
  },
  {
    type: "task",
    summary:
      "You can track how many hours were spent working on an issue, and how many hours remain.",
    description: "",
    reporter: "Pickle Rick",
    assignees: [],
    priority: "lowest",
    id: uuid()
  },
  {
    type: "story",
    summary:
      "Try dragging issues to different columns to transition their status.",
    description: "",
    reporter: "Baby Yoda",
    assignees: [],
    priority: "medium",
    id: uuid()
  },
  {
    type: "story",
    summary: "You can use rich text with images in issue descriptions.",
    description: "",
    reporter: "Pickle Rick",
    assignees: ["Lord Gaben"],
    priority: "lowest",
    id: uuid()
  },
  {
    type: "task",
    summary: "This is an issue of type: Task.",
    desription: "",
    reporter: "Baby Yoda",
    assignees: ["Pickle Rick"],
    priority: "high",
    id: uuid()
  },
  
];

export const Provider = props => {
  const [cards, setCards] = React.useState(cardsList);

  const addCard = (values) => {
    setCards([...cards, {...values, id: uuid()}])
  }


  return (
    <Context.Provider value={{cards, addCard}}>
      {props.children}
    </Context.Provider>
  );
};
