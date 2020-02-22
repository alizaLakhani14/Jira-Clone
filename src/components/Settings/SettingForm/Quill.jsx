import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Quill.scss";

const Quill = ({ defaultValue, setFieldValue }) => {
  const [text, setText] = React.useState(defaultValue);

  const handleChange = value => {
    setText(value);
    setFieldValue("description", text);
  };

  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      className="setting-form-quill"
    />
  );
};

export default Quill;
