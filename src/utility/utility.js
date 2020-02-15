import React from "react";
import { Input } from "reactstrap";
import "./utility.scss";

export const Myinput = ({ field, form, ...props }) => (
  <Input {...field} {...props} className="form-input" />
);

const utility = () => {
  return <div></div>;
};

export default utility;
