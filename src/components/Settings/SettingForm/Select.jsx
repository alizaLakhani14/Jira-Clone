import React from "react";
import Select from "react-select";
import "./Select.scss";

const SelectComponent = (props, { haha}) => {
  const handleChange = value => {
    props.onChange(props.field, value.value);
  };

  return (
    <div className="select-container">
      <Select
        options={props.options}
        defaultValue={props.options[0]}
        onChange={handleChange}
        isSearchable={props.searchable}
        isMulti={props.isMulti}
      />
    </div>
  );
};

export default SelectComponent;
