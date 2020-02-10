import React from "react";
import "./Cards2.scss";
import "./Cards2.scss";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowUp,
  faArrowDown,
  faCheckSquare
} from "@fortawesome/free-solid-svg-icons";

const Cards2 = () => {
  const backLog = [
    {
      description: "Click on an issue to see what's behind it.",
      checked: true,
      growing: false,
      shrinking: true,
      users: ["https://i.ibb.co/7JM1P2r/picke-rick.jpg"],
      saved: false
    },
    {
      description:
        "Each issue can be assigned priority from lowest to highest.",
      checked: true,
      growing: true,
      shrinking: false,
      users: [],
      saved: false
    },
    {
      description: "Try leaving a comment on this issue.",
      checked: true,
      growing: true,
      shrinking: false,
      saved: false,
      users: ["https://i.ibb.co/6n0hLML/baby-yoda.jpg"]
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
      ]
    },
    {
      description:
        "You can track how many hours were spent working on an issue, and how many hours remain.",
      checked: true,
      shrinking: true,
      growing: false,
      saved: false,
      users: []
    },
    {
      description:
        "Try dragging issues to different columns to transition their status.",
      saved: true,
      growing: true,
      checked: false,
      shrinking: false,
      users: []
    },
    {
      description: "You can use rich text with images in issue descriptions.",
      saved: true,
      shrinking: true,
      users: ["https://i.ibb.co/6RJ5hq6/gaben.jpg"],
      checked: false,
      growing: false
    },
    {
      description: "This is an issue of type: Task.",
      checked: true,
      growing: true,
      shrinking: false,
      saved: false,
      users: ["https://i.ibb.co/7JM1P2r/picke-rick.jpg"]
    }
  ];
  const selectedForDevelopment = [];
  const inProgress = [];
  const done = [];

  let card = backLog.map(item => (
    <div className="agileBoardCardsContainer__col__body__card">
      <p>{item.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                src={item}
                alt="img"
                className="agileBoardCardsContainer__col__body__card__img"
              />
            ))}
        </div>
      </div>
    </div>
  ));

  return (
    <Row className="agileBoardCardsContainer">
      <Col className="agileBoardCardsContainer__col">
        <h4>
          Backlog <span>{backLog.length}</span>
        </h4>
        <div className="agileBoardCardsContainer__col__body">{card}</div>
      </Col>
      <Col className="agileBoardCardsContainer__col">
        <h4>
          Selected for development <span>{selectedForDevelopment.length}</span>
        </h4>
        <div className="agileBoardCardsContainer__col__body"></div>
      </Col>
      <Col className="agileBoardCardsContainer__col">
        <h4>
          In Progress <span>{inProgress.length}</span>
        </h4>
        <div className="agileBoardCardsContainer__col__body"></div>
      </Col>
      <Col className="agileBoardCardsContainer__col">
        <h4>
          Done <span>{done.length}</span>
        </h4>
        <div className="agileBoardCardsContainer__col__body"></div>
      </Col>
    </Row>
  );
};

export default Cards2;
