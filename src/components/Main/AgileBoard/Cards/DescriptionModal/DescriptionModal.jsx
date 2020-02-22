import React, { useEffect, useContext, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Row,
  Col,
  Input,
  Label
} from "reactstrap";
import "./DescriptionModal.scss";
import ReactSelect from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowUp,
  faArrowDown,
  faCheckSquare,
  faExclamationCircle,
  faTrashAlt,
  faCross,
  faTimes,
  faLink,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { Myinput } from "./../../../../../utility/utility";
import { Context } from "../../../../../Provider";
import TextArea from "antd/lib/input/TextArea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const options = [
  {
    value: "task",
    label: (
      <div>
        <FontAwesomeIcon icon={faCheckSquare} className="icon check" />
        Task
      </div>
    )
  },
  {
    value: "bug",
    label: (
      <div>
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="icon exclamation"
        />
        Bug
      </div>
    )
  },
  {
    value: "story",
    label: (
      <div>
        {" "}
        <FontAwesomeIcon icon={faBookmark} className="icon bookmark" />
        Story
      </div>
    )
  }
];

const DescriptionModal = ({ id, modal, toggle }) => {
  const { selectedCard, inputValue } = useContext(Context);
  const [quillValue, setQuillValue] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  // const [quillValue, setQuillValue] = useState("hello");
  const [commentsAvailable, setCommentsAvailable] = useState(false);
  const handleChange = value => {
    setQuillValue(value);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   changeSummary(quillValue);
  // };

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdropClassName="description-backdrop"
        className="description-modal"
        size="xl"
      >
        <ModalBody className="description-modal-body">
          <div className="description-modal-header">
            <div className="header-select">
              <ReactSelect
                isSearchable={false}
                options={options}
                defaultValue={options[0]}
              />
            </div>
            <div className="description-modal-header-buttons">
              <Button>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ marginRight: "3px" }}
                />
                Give feedback
              </Button>
              <Button>
                <FontAwesomeIcon icon={faLink} style={{ marginRight: "3px" }} />
                Copy link
              </Button>
              <Button>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
              <Button onClick={toggle}>
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          </div>
          <div className="description-modal-main">
            <Row>
              <Col lg="7" md="7" sm="7" xs="7">
                <TextArea
                  className="summary-input"
                  value={selectedCard.length && selectedCard[0].summary}
                />
                <div
                  className="description-div"
                  onClick={() => setIsEditable(true)}
                >
                  <Label className="description-modal-label">Description</Label>
                  <ReactQuill
                    onChange={e => handleChange(e)}
                    value={
                      selectedCard.length > 0 && selectedCard[0].description
                    }
                    // onChange={handleChange}
                    className={isEditable === true && "quill-edit-mode"}
                  />
                  <div
                    className={`description-button-div ${isEditable === true &&
                      "description-button-div-visible"}`}
                  >
                    <Button color="primary">Save</Button>
                    <Button
                      className="description-cancel-button"
                      onClick={e => {
                        e.stopPropagation();
                        setIsEditable(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className="comments-div">
                  <Label className="description-modal-label">Comments</Label>
                  <div style={{ width: "100%", position: "relative" }}>
                    <img
                      src={"https://i.ibb.co/6RJ5hq6/gaben.jpg"}
                      alt="img"
                      className="comments-img"
                    />
                    <div>
                      <div style={{ paddingLeft: "44px", width: "100%" }}>
                        <div
                          className={
                            commentsAvailable === false
                              ? "comments-editable-div-visible"
                              : "comments-editable-div-hidden"
                          }
                          onClick={() => {
                            setCommentsAvailable(true);
                          }}
                        >
                          Add a comment...
                        </div>
                        {commentsAvailable === true && (
                          <Input
                            type="textarea"
                            className="comments-text-area"
                            placeholder="Add a comment..."
                            autoFocus={true}
                          ></Input>
                        )}
                      </div>

                      <div
                        className={
                          commentsAvailable === true
                            ? "comments-button-div-visible"
                            : "comments-button-div-hidden"
                        }
                      >
                        <Button color="primary">Save</Button>
                        <Button
                          className="comments-cancel-button"
                          onClick={() => {
                            setCommentsAvailable(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="comments"
                  style={{
                    position: "relative",
                    width: "100%",
                    marginTop: "1.5em"
                  }}
                >
                  <img
                    src={"https://i.ibb.co/6RJ5hq6/gaben.jpg"}
                    alt="img"
                    className="comments-img"
                    style={{ top: "-2px" }}
                  />
                  <div style={{ paddingLeft: "44px" }}>
                    <h5 className="comments-heading">
                      Lord Gaben{" "}
                      <span
                        style={{
                          fontSize: "12px",
                          marginLeft: "8px"
                        }}
                      >
                        20 days ago
                      </span>
                    </h5>
                    <ul
                      style={{
                        margin: "0px",
                        listStyle: "none",
                        paddingLeft: "0px"
                      }}
                    >
                      <li>In the moonlight,</li>
                      <li>The color and scent of the wisteria</li>
                      <li>Seems far away.</li>
                    </ul>
                    <div className="link-buttons">
                      <Button className="link-button" color="link">
                        Edit
                      </Button>
                      <span>.</span>
                      <Button className="link-button" color="link">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

              </Col>
              <Col lg="5" md="5" sm="5" xs="5"></Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DescriptionModal;
