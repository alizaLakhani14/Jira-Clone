/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Modal, ModalBody, Row, Col, Input, Button, Label } from "reactstrap";
import { Formik, Form, Field, useField } from "formik";
import "./TaskDescription.scss";
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
  faPaperPlane,
  faStopwatch
} from "@fortawesome/free-solid-svg-icons";
import ReactSelect from "react-select";
import { Context } from "./../../../../../Provider";
import TextArea from "antd/lib/input/TextArea";
import ReactQuill from "react-quill";
import DeleteModal from "./DeleteModal/DeleteModal";

const TaskDescription = () => {
  const {
    selectedCard,
    makeEdit,
    fetchedObject,
    update,
    open,
    toggle1
  } = React.useContext(Context);
  const [isEditable, setIsEditable] = React.useState(false);
  const [commentsAvailable, setCommentsAvailable] = React.useState(false);
  const [changeDescription, setChangeDescription] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const TextArea = ({ form, ...props }) => {
    const [field] = useField(props);
    return (
      <Input {...field} {...props} className="summary-input" type="textarea" />
    );
  };
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

  const options2 = [
    {
      value: "Selected for development",
      label: <div className="label-div gray">SELECTED FOR DEVELOPMENT</div>
    },
    { value: "Backlog", label: <div className="label-div gray">BACKLOG</div> },
    {
      value: "In Progress",
      label: <div className="label-div blue">IN PROGRESS</div>
    },
    { value: "Done", label: <div className="label-div green">DONE</div> }
  ];
  const options3 = [
    {
      value: "Pickle Rick",
      label: (
        <div>
          <img
            src={"https://i.ibb.co/7JM1P2r/picke-rick.jpg"}
            alt="img"
            className="label-img"
          />{" "}
          Pickle Rick
        </div>
      )
    },
    {
      value: "Lord Gaben",
      label: (
        <div>
          <img
            src={"https://i.ibb.co/6RJ5hq6/gaben.jpg"}
            alt="img"
            className="label-img"
          />{" "}
          Lord Gaben
        </div>
      )
    },
    {
      value: "Baby Yoda",
      label: (
        <div>
          <img
            src={"https://i.ibb.co/6n0hLML/baby-yoda.jpg"}
            alt="img"
            className="label-img"
          />{" "}
          Baby Yoda
        </div>
      )
    }
  ];
  const options4 = [
    {
      value: "highest",
      label: (
        <div>
          <FontAwesomeIcon icon={faArrowUp} className="priority-icon highest" />
          Highest
        </div>
      )
    },
    {
      value: "high",
      label: (
        <div>
          <FontAwesomeIcon icon={faArrowUp} className="priority-icon high" />
          High
        </div>
      )
    },
    {
      value: "medium",
      label: (
        <div>
          <FontAwesomeIcon icon={faArrowUp} className="priority-icon medium" />
          Medium
        </div>
      )
    },
    {
      value: "low",
      label: (
        <div>
          <FontAwesomeIcon icon={faArrowDown} className="priority-icon low" />
          Low
        </div>
      )
    },
    {
      value: "lowest",
      label: (
        <div>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="priority-icon lowest"
          />
          Lowest
        </div>
      )
    }
  ];
  return (
    <Modal
      isOpen={open}
      toggle={toggle1}
      size="xl"
      backdropClassName="description-backdrop"
      className="description-modal"
    >
      <ModalBody>
        <Formik
          initialValues={{
            type: selectedCard[0].type,
            summary: selectedCard[0].summary,
            description: selectedCard[0].description,
            priority: selectedCard[0].priority,
            assignees: selectedCard[0].assignees,
            id: selectedCard[0].id
          }}
          onSubmit={(values, { setSubmitting }) => {
            // makeEdit(values);
            update(values);
            toggle1();
          }}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg="7" md="7" sm="7" xs="7">
                    <div className="header-select">
                      <ReactSelect
                        isSearchable={false}
                        options={options}
                        defaultValue={options.filter(
                          item => item.value === values.type
                        )}
                        onChange={value =>
                          setFieldValue("type", value && value.value)
                        }
                      />
                    </div>
                    <div style={{ marginTop: "1em" }}>
                      <TextArea
                        name="summary"
                        value={values.summary}
                        onKeyDown={event => {
                          if (event.keyCode === 13) {
                            event.target.blur();
                          }
                        }}
                      />
                    </div>
                    <div
                      className="description-div"
                      onClick={() => setIsEditable(true)}
                    >
                      <Label className="description-modal-label">
                        Description
                      </Label>
                      <ReactQuill
                        onChange={e => handleChange(e)}
                        defaultValue={values.description}
                        onChange={e =>
                          changeDescription === true &&
                          setFieldValue("description", e)
                        }
                        className={isEditable === true && "quill-edit-mode"}
                      />
                      <div
                        className={`description-button-div ${isEditable ===
                          true && "description-button-div-visible"}`}
                      >
                        <Button
                          color="primary"
                          onClick={e => {
                            e.stopPropagation();
                            setChangeDescription(true);
                            setIsEditable(false);
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          className="description-cancel-button"
                          onClick={e => {
                            e.stopPropagation();
                            setFieldValue(
                              "description",
                              selectedCard[0].description
                            );
                            setIsEditable(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                    <div className="comments-div">
                      <Label className="description-modal-label">
                        Comments
                      </Label>
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
                  <Col
                    lg="5"
                    md="5"
                    sm="5"
                    xs="5"
                    style={{ paddingLeft: "70px" }}
                  >
                    <div className="col-2-buttons">
                      <Button>
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          style={{ marginRight: "3px" }}
                        />
                        Give feedback
                      </Button>
                      <Button>
                        <FontAwesomeIcon
                          icon={faLink}
                          style={{ marginRight: "3px" }}
                        />
                        Copy link
                      </Button>
                      <Button onClick={toggleIsOpen}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Button>
                      <Button onClick={toggle1}>
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                    </div>
                    <div
                      style={{ marginTop: "16px" }}
                      className="task-status-div"
                    >
                      <Label className="description-modal-label">Status</Label>
                      <ReactSelect
                        options={options2}
                        defaultValue={options2[0]}
                        isSearchable={false}
                      ></ReactSelect>
                    </div>
                    <div style={{ marginTop: "1em" }} className="assignees-div">
                      <Label className="description-modal-label">
                        Assignees
                      </Label>
                      <ReactSelect
                        options={options3}
                        isMulti
                        defaultValue={options3.filter(
                          item =>
                            values.assignees.length > 0 &&
                            values.assignees.includes(item.value)
                        )}
                        onChange={value => {
                          setFieldValue(
                            "assignees",
                            value && value.map(item => item.value)
                          );
                        }}
                      ></ReactSelect>
                    </div>
                    <div style={{ marginTop: "1em" }} className="priority-div">
                      <Label className="description-modal-label">
                        Priority
                      </Label>
                      <ReactSelect
                        options={options4}
                        defaultValue={options4.filter(
                          item => item.value === values.priority
                        )}
                        isSearchable={false}
                        onChange={e => {
                          setFieldValue("priority", e.value);
                        }}
                      ></ReactSelect>
                    </div>
                    <div style={{ marginTop: "1em" }}>
                      <Label className="description-modal-label">
                        Original Estimate (Hours)
                      </Label>
                      <Input
                        value="15"
                        className="estimated-hours-input"
                      ></Input>
                    </div>
                    <div className="time-track">
                      <Label className="description-modal-label">
                        Time Tracking
                      </Label>
                      <div className="time-tracker">
                        <FontAwesomeIcon
                          icon={faStopwatch}
                          className="timer-icon"
                        />
                        <div>
                          <div className="loader">
                            <div className="loading"></div>
                          </div>
                          <div className="time-estimation">
                            <p>4h logged</p>
                            <p>6h estimated</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="created">Created at 22 days ago</div>
                    <div className="created">Updated at 10 days ago</div>
                  </Col>
                </Row>
                <Button type="submit" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Form>
            );
          }}
        </Formik>
        <DeleteModal
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
          toggle={toggle1}
        />
      </ModalBody>
    </Modal>
  );
};

export default TaskDescription;
