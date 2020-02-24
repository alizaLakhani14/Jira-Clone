import React, { useEffect } from "react";
import "./Cards.scss";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowUp,
  faArrowDown,
  faCheckSquare,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import uuid from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Context } from "./../../../../Provider";

import TaskDescription from "./../Cards/TaskDescription/TaskDescription";

const Cards = () => {
  const {
    filteredCards,
    extractValues,
    selectedCard,
    toggle1
  } = React.useContext(Context);
  const [columns, setColumns] = React.useState({});

  useEffect(() => {
    const columnData = {
      [uuid()]: { name: "BackLog", items: filteredCards },
      [uuid()]: { name: "Selected for development", items: [] },
      [uuid()]: { name: "In progress", items: [] },
      [uuid()]: { name: "Done", items: [] }
    };
    setColumns(columnData);
  }, [filteredCards]);

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
                                  style={{
                                    ...provided.draggableProps.style
                                  }}
                                  onClick={() => {
                                    extractValues(item.id);
                                    toggle1();
                                  }}
                                >
                                  <p>{item.summary}</p>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between"
                                    }}
                                  >
                                    <div className="agileBoardCardsContainer__col__body__card__icons">
                                      {item.type === "task" ? (
                                        <FontAwesomeIcon
                                          icon={faCheckSquare}
                                          className="agileBoardCardsContainer__col__body__card__icons__icon agileBoardCardsContainer__col__body__card__icons__icon--check"
                                        />
                                      ) : item.type === "story" ? (
                                        <FontAwesomeIcon
                                          icon={faBookmark}
                                          className="agileBoardCardsContainer__col__body__card__icons__icon agileBoardCardsContainer__col__body__card__icons__icon--bookmark"
                                        />
                                      ) : (
                                        <FontAwesomeIcon
                                          icon={faExclamationCircle}
                                          className="agileBoardCardsContainer__col__body__card__icons__icon agileBoardCardsContainer__col__body__card__icons__icon--exclamation"
                                        />
                                      )}
                                      {item.priority === "high" ||
                                      item.priority === "highest" ||
                                      item.priority === "medium" ? (
                                        <FontAwesomeIcon
                                          icon={faArrowUp}
                                          className={`agileBoardCardsContainer__col__body__card__icons__icon ${
                                            item.priority === "high"
                                              ? "agileBoardCardsContainer__col__body__card__icons__icon--high"
                                              : item.priority === "highest"
                                              ? "agileBoardCardsContainer__col__body__card__icons__icon--highest"
                                              : "agileBoardCardsContainer__col__body__card__icons__icon--medium"
                                          }`}
                                        />
                                      ) : (
                                        <FontAwesomeIcon
                                          icon={faArrowDown}
                                          className={`agileBoardCardsContainer__col__body__card__icons__icon ${
                                            item.priority === "low"
                                              ? "agileBoardCardsContainer__col__body__card__icons__icon--low"
                                              : "agileBoardCardsContainer__col__body__card__icons__icon--lowest"
                                          }`}
                                        />
                                      )}
                                    </div>
                                    <div>
                                      {item.assignees.length > 0 &&
                                        item.assignees.map((item, idx) => {
                                          return item === "Baby Yoda" ? (
                                            <img
                                              key={idx}
                                              className="agileBoardCardsContainer__col__body__card__img"
                                              src={
                                                "https://i.ibb.co/6n0hLML/baby-yoda.jpg"
                                              }
                                              alt="img"
                                            />
                                          ) : item === "Lord Gaben" ? (
                                            <img
                                              key={idx}
                                              className="agileBoardCardsContainer__col__body__card__img"
                                              src={
                                                "https://i.ibb.co/6RJ5hq6/gaben.jpg"
                                              }
                                              alt="img"
                                            />
                                          ) : (
                                            <img
                                              key={idx}
                                              className="agileBoardCardsContainer__col__body__card__img"
                                              src={
                                                "https://i.ibb.co/7JM1P2r/picke-rick.jpg"
                                              }
                                              alt="img"
                                            />
                                          );
                                        })}
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
      {selectedCard.length > 0 ? <TaskDescription /> : null}
    </Row>
  );
};

export default Cards;
