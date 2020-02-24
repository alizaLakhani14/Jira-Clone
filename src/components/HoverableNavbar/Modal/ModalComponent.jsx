import React, { useContext } from "react";
import { Modal, ModalBody, Button, Label } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Myinput } from "./../../../utility/utility";
import "./ModalComponent.scss";
import * as Yup from "yup";
import Quill from "./../../Settings/SettingForm/Quill";
import Select from "./../../Settings/SettingForm/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faArrowUp,
  faArrowDown,
  faCheckSquare,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import ReactSelect from "react-select";
import { Context } from "./../../../Provider";

const validationSchema = Yup.object().shape({
  summary: Yup.string().required("This field is required")
});

const ModalComponent = ({ toggle, isOpen }) => {
  const { addCard } = useContext(Context);

  return (
    <Modal toggle={toggle} isOpen={isOpen} centered size="lg">
      <ModalBody className="body">
        <h1>Create issue</h1>
        <Formik
          initialValues={{
            type: "task",
            summary: "",
            description: "",
            reporter: "Lord Gaben",
            assignees: [],
            priority: "medium"
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setSubmitting(true);
            resetForm();
            toggle();
            addCard(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleSubmit,
            isSubmitting
          }) => {
            return (
              <Form>
                <div className="form-field">
                  <Label className="label">Issue type</Label>
                  <Select
                    options={[
                      {
                        value: "task",
                        label: (
                          <div>
                            <FontAwesomeIcon
                              icon={faCheckSquare}
                              className="icon check"
                            />
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
                            <FontAwesomeIcon
                              icon={faBookmark}
                              className="icon bookmark"
                            />
                            Story
                          </div>
                        )
                      }
                    ]}
                    onChange={setFieldValue}
                    field="type"
                    searchable={false}
                  />
                  <p className="issue-p">
                    Start typing to get a list of possible matches.
                  </p>
                </div>
                <div className="form-field">
                  <hr></hr>
                </div>
                <div
                  className={`form-field ${touched.summary &&
                    errors.summary &&
                    "error"}`}
                >
                  <Label className="label">Short Summary</Label>
                  <Field
                    name="summary"
                    value={values.summary}
                    component={Myinput}
                  ></Field>
                  <p className="summary-p">
                    Concisely summarize the issue in one or two sentences.
                  </p>
                  {touched.summary && errors.summary ? (
                    <ErrorMessage
                      name="summary"
                      component="p"
                      className="error-message-modal"
                    ></ErrorMessage>
                  ) : null}
                </div>
                <div className="form-field">
                  <Label className="label">Description</Label>
                  <Quill
                    defaultValue={values.description}
                    setFieldValue={setFieldValue}
                  ></Quill>
                </div>
                <div className="form-field">
                  <Label className="label">Reporter</Label>
                  <Select
                    options={[
                      {
                        value: "Lord Gaben",
                        label: (
                          <div>
                            <img
                              src="https://i.ibb.co/6RJ5hq6/gaben.jpg"
                              alt="img"
                              className="modal-img"
                            />
                            Lord Gaben
                          </div>
                        )
                      },
                      {
                        value: "Pickle Rick",
                        label: (
                          <div>
                            <img
                              src="https://i.ibb.co/7JM1P2r/picke-rick.jpg"
                              alt="img"
                              className="modal-img"
                            />
                            Pickle Rick
                          </div>
                        )
                      },
                      {
                        value: "Baby Yoda",
                        label: (
                          <div>
                            {" "}
                            <img
                              src="https://i.ibb.co/6n0hLML/baby-yoda.jpg"
                              alt="img"
                              className="modal-img"
                            />
                            Baby Yoda
                          </div>
                        )
                      }
                    ]}
                    onChange={setFieldValue}
                    field="reporter"
                    searchable={false}
                  ></Select>
                </div>
                <div className="form-field">
                  <Label className="label">Assignees</Label>

                  <ReactSelect
                    options={[
                      {
                        value: "Lord Gaben",
                        label: (
                          <div>
                            <img
                              src="https://i.ibb.co/6RJ5hq6/gaben.jpg"
                              alt="img"
                              className="modal-img"
                            />
                            Lord Gaben
                          </div>
                        )
                      },
                      {
                        value: "Pickle Rick",
                        label: (
                          <div>
                            <img
                              src="https://i.ibb.co/7JM1P2r/picke-rick.jpg"
                              alt="img"
                              className="modal-img"
                            />
                            Pickle Rick
                          </div>
                        )
                      },
                      {
                        value: "Baby Yoda",
                        label: (
                          <div>
                            {" "}
                            <img
                              src="https://i.ibb.co/6n0hLML/baby-yoda.jpg"
                              alt="img"
                              className="modal-img"
                            />
                            Baby Yoda
                          </div>
                        )
                      }
                    ]}
                    isMulti
                  ></ReactSelect>
                </div>
                <div className="form-field">
                  <Label className="label">Priority</Label>
                  <ReactSelect
                    options={[
                      {
                        value: "highest",
                        label: (
                          <div>
                            <FontAwesomeIcon
                              icon={faArrowUp}
                              className="icon highest"
                            />
                            Highest
                          </div>
                        )
                      },
                      {
                        value: "high",
                        label: (
                          <div>
                            <FontAwesomeIcon
                              icon={faArrowUp}
                              className="icon high"
                            />
                            High
                          </div>
                        )
                      },
                      {
                        value: "medium",
                        label: (
                          <div>
                            <FontAwesomeIcon
                              icon={faArrowUp}
                              className="icon medium"
                            />
                            Medium
                          </div>
                        )
                      },
                      {
                        value: "low",
                        label: (
                          <div>
                            <FontAwesomeIcon
                              icon={faArrowDown}
                              className="icon low"
                            />
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
                              className="icon lowest"
                            />
                            Lowest
                          </div>
                        )
                      }
                    ]}
                    isSearchable={false}
                    defaultValue={{
                      value: "medium",
                      label: (
                        <div>
                          <FontAwesomeIcon
                            icon={faArrowUp}
                            className="icon medium"
                          />
                          Medium
                        </div>
                      )
                    }}
                    onChange={value => {
                      setFieldValue("priority", value.value);
                    }}
                  ></ReactSelect>
                  <p className="priority-p">
                    Priority in relation to other issues.
                  </p>
                </div>
                <div className="modal-buttons-div">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="modal-form-submit"
                  >
                    Create Issue
                  </Button>
                  <Button
                    onClick={toggle}
                    className="modal-cancel"
                    disable={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default ModalComponent;
