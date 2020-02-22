import React from "react";
import uuid from "uuid";

export const Context = React.createContext();
const cardsList = [
  {
    type: "task",
    summary: "Click on an issue to see what's behind it.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Lord Gaben",
    assignees: ["Pickle Rick"],
    priority: "low",
    id: uuid()
  },
  {
    type: "task",
    summary: "Each issue can be assigned priority from lowest to highest.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Lord Gaben",
    assignees: [],
    priority: "highest",
    id: uuid()
  },
  {
    type: "task",
    summary: "Try leaving a comment on this issue.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Pickle Rick",
    assignees: ["Baby Yoda"],
    priority: "medium",
    id: uuid()
  },
  {
    type: "story",
    summary:
      "Each issue has a single reporter but can have multiple assignees.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Baby Yoda",
    assignees: ["Baby Yoda", "Lord Gaben"],
    priority: "high",
    id: uuid()
  },
  {
    type: "task",
    summary:
      "You can track how many hours were spent working on an issue, and how many hours remain.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Pickle Rick",
    assignees: [],
    priority: "lowest",
    id: uuid()
  },
  {
    type: "story",
    summary:
      "Try dragging issues to different columns to transition their status.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Baby Yoda",
    assignees: [],
    priority: "medium",
    id: uuid()
  },
  {
    type: "story",
    summary: "You can use rich text with images in issue descriptions.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Pickle Rick",
    assignees: ["Lord Gaben"],
    priority: "lowest",
    id: uuid()
  },
  {
    type: "task",
    summary: "This is an issue of type: Task.",
    desription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    reporter: "Baby Yoda",
    assignees: ["Pickle Rick"],
    priority: "high",
    id: uuid()
  }
];

export const Provider = props => {
  const [cards, setCards] = React.useState(cardsList);
  const [selectedCard, setSelectedCard] = React.useState([]);

  const extractValues = id => {
    let extractedValue = cards.filter(item => item.id === id);
    setSelectedCard(extractedValue);
  };

  const addCard = values => {
    setCards([...cards, { ...values, id: uuid() }]);
  };

  const [inputValue, setInputValue] = React.useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const filteredCards = cards.filter(card =>
    card.summary.toLowerCase().includes(inputValue.toLowerCase())
  );
  const handleDelete = id => {
    let deletedCards = cards.filter(card => card.id !== id);
    setCards(deletedCards);
  };

  const [searchInputValue, setSearchInputValue] = React.useState("");

  const handleSearchInputChange = e => {
    setSearchInputValue(e.target.value);
  };

  const filteredOptions = cards.filter(card =>
    card.summary.toLowerCase().includes(searchInputValue.toLowerCase())
  );
  const [fetchedObject, setFetchedObject] = React.useState({});

  const makeEdit = values => {
    setFetchedObject({ ...values });
  };

  const update = values => {
    console.log(values, "hahahah");
    setCards(
      cards.map(card => {
        if (card.id === values.id) {
          return { ...values };
        } else {
          return card;
        }
      })
    );
  };

  const [open, setOpen] = React.useState(false);
  const toggle1 = () => {
    setOpen(!open);
  };

  return (
    <Context.Provider
      value={{
        cards,
        addCard,
        inputValue,
        handleChange,
        filteredCards,
        extractValues,
        selectedCard,
        handleDelete,
        searchInputValue,
        handleSearchInputChange,
        filteredOptions,
        makeEdit,
        fetchedObject,
        update,
        open,
        toggle1
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
