import React from "react";
import "./SearchSection.scss";
import { Context } from "./../../../../Provider";

const SearchSection = () => {
  const { filterCards } = React.useContext(Context);
  const [value, setValue] = React.useState("");
  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="agileBoard__container__searchSection__searchbar">
      <i className="fe fe-search agileBoard__container__searchSection__searchbar__icon" />
      <input
        value={value}
        onChange={e => {
          handleChange(e);
          filterCards(value);
        }}
      ></input>
    </div>
  );
};

export default SearchSection;
