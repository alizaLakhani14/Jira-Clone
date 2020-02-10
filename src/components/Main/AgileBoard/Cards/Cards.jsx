import React from "react";
import "./Cards.scss";
import { Row} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowUp,
  faArrowDown,
  faCheckSquare
} from "@fortawesome/free-solid-svg-icons";
import uuid from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const cards = [
  {
    description: "Click on an issue to see what's behind it.",
    checked: true,
    growing: false,
    shrinking: true,
    users: ["https://i.ibb.co/7JM1P2r/picke-rick.jpg"],
    saved: false,
    id: uuid()
  },
  {
    description: "Each issue can be assigned priority from lowest to highest.",
    checked: true,
    growing: true,
    shrinking: false,
    users: [],
    saved: false,
    id: uuid()
  },
  {
    description: "Try leaving a comment on this issue.",
    checked: true,
    growing: true,
    shrinking: false,
    saved: false,
    users: ["https://i.ibb.co/6n0hLML/baby-yoda.jpg"],
    id: uuid()
  },
  {
    description:
      "Each issue has a single reporter but can have multiple assignees.",
    saved: true,
    growing: true,
    shrinking: false,
    checked: false,
    users: [
      "https://i.ibb.co/6RJ5hq6/gaben.jpg",
      "https://i.ibb.co/6n0hLML/baby-yoda.jpg"
    ],
    id: uuid()
  },
  {
    description:
      "You can track how many hours were spent working on an issue, and how many hours remain.",
    checked: true,
    shrinking: true,
    growing: false,
    saved: false,
    users: [],
    id: uuid()
  },
  {
    description:
      "Try dragging issues to different columns to transition their status.",
    saved: true,
    growing: true,
    checked: false,
    shrinking: false,
    users: [],
    id: uuid()
  },
  {
    description: "You can use rich text with images in issue descriptions.",
    saved: true,
    shrinking: true,
    users: ["https://i.ibb.co/6RJ5hq6/gaben.jpg"],
    checked: false,
    growing: false,
    id: uuid()
  },
  {
    description: "This is an issue of type: Task.",
    checked: true,
    growing: true,
    shrinking: false,
    saved: false,
    users: ["https://i.ibb.co/7JM1P2r/picke-rick.jpg"],
    id: uuid()
  }
];

const columnData = {
  [uuid()]: { name: "BackLog", items: cards },
  [uuid()]: { name: "Selected for development", items: [] },
  [uuid()]: { name: "In progress", items: [] },
  [uuid()]: { name: "Done", items: [] }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destinationItems = [...destinationColumn.items];
    const removed = sourceItems.splice(source.index, 1);
    destinationItems.splice(destination.index, 0, removed[0]);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destinationColumn,
        items: destinationItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const removed = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed[0]);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

const Cards = () => {
  const [columns, setColumns] = React.useState(columnData);

  return (
    <Row className="agileBoardCardsContainer">
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, object]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, sanpshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="col agileBoardCardsContainer__col"
                  >
                    <h4>
                      {object.name} <span>{object.items.length}</span>
                    </h4>
                    <div className="agileBoardCardsContainer__col__body">
                      {object.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  className="agileBoardCardsContainer__col__body__card"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{ ...provided.draggableProps.style }}
                                >
                                  <p>{item.description}</p>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between"
                                    }}
                                  >
                                    <div className="agileBoardCardsContainer__col__body__card__icons">
                                      {item.saved === true && (
                                        <FontAwesomeIcon
                                          icon={faBookmark}
                                          className="agileBoardCardsContainer__col__body__card__icons__icon agileBoardCardsContainer__col__body__card__icons__icon--bookmark"
                                        />
                                      )}
                                      {item.shrinking === true && (
                                        <FontAwesomeIcon
                                          icon={faArrowDown}
                                          className=" agileBoardCardsContainer__col__body__card__icons__icon agileBoardCardsContainer__col__body__card__icons__icon--arrowDown"
                                        />
                                      )}
                                      {item.growing === true && (
                                        <FontAwesomeIcon
                                          icon={faArrowUp}
                                          className=" agileBoardCardsContainer__col__body__card__icons__icon agileBoardCardsContainer__col__body__card__icons__icon--arrowUp"
                                        />
                                      )}
                                      {item.checked === true && (
                                        <FontAwesomeIcon
                                          icon={faCheckSquare}
                                          className=" agileBoardCardsContainer__col__body__card__icons__icon agileBoardCardsContainer__col__body__card__icons__icon--check"
                                        />
                                      )}
                                    </div>
                                    <div>
                                      {item.users.length > 0 &&
                                        item.users.map(item => (
                                          <img
                                            key={Math.random() * 100000}
                                            src={item}
                                            alt="img"
                                            className="agileBoardCardsContainer__col__body__card__img"
                                          />
                                        ))}
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </div>
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </Row>
  );
};

export default Cards;
