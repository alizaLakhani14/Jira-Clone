import React from "react";
import "./SettingForm.scss";
import { Breadcrumb, BreadcrumbItem, Label, Input, Button } from "reactstrap";
import { formik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Quill from "./Quill";
import Select from "./Select";
import { Myinput } from "./../../../utility/utility";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  url: Yup.string()
    .required("This field is required")
    .url("Must be a valid URL")
});

const SettingForm = () => {
  return (
    <div className="setting-form-container">
      <div className="setting-form-container__form-container">
        <div>
          <Breadcrumb className="setting-form-container__form-container__breadcrumb">
            <BreadcrumbItem>Projects</BreadcrumbItem>
            <BreadcrumbItem>singularity 1.0</BreadcrumbItem>
            <BreadcrumbItem>Kanban</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <h1>Project Details</h1>
        <Formik
          initialValues={{
            name: "singularity 1.0",
            url: "https://www.atlassian.com/software/jira",
            description: "",
            category: "Software"
          }}
          validationSchema={validationSchema}
          onSubmit={() => {
            console.log("submitted");
          }}
        >
          {({
            values,
            handleSubmit,
            setFieldValue,
            handleChange,
            errors,
            touched
          }) => {
            return (
              <Form>
                <div
                  className={`form-field ${touched.name &&
                    errors.name &&
                    "error"}`}
                >
                  <Label className="input-label">Name</Label>
                  <Field name="name" value={values.name} component={Myinput} />
                  {touched.name && errors.name ? (
                    <ErrorMessage
                      name="name"
                      className="error-message"
                      component="p"
                    />
                  ) : null}
                </div>
                <div
                  className={`form-field ${touched.url &&
                    errors.url &&
                    "error"}`}
                >
                  <Label className="input-label">URL</Label>
                  <Field name="url" value={values.url} component={Myinput} />
                  {touched.url && errors.url ? (
                    <ErrorMessage
                      name="url"
                      className="error-message"
                      component="p"
                    />
                  ) : null}
                </div>

                <div className="form-field">
                  <Label className="input-label">Description</Label>
                  <Quill
                    defaultValue={values.description}
                    setFieldValue={setFieldValue}
                  ></Quill>
                  <p className="description-p">
                    Describe the project in as much detail as you'd like.
                  </p>
                </div>
                <div className="form-field">
                  <Label className="input-label">Project Category</Label>
                  <Select
                    options={[
                      { value: "Software", label: "Software" },
                      { value: "Marketing", label: "Marketing" },
                      { value: "Business", label: "Business" }
                    ]}
                    onChange={setFieldValue}
                    field="category"
                    searchable={true}
                  ></Select>
                </div>
                <div className="form-field">
                  <Button
                    className="setting-form-button"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      \
    </div>
  );
};

export default SettingForm;
