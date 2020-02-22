import React from "react";
import "./SearchSection.scss";
import { Context } from "./../../../../Provider";

const SearchSection = () => {
  const { inputValue, handleChange } = React.useContext(Context);

  return (
    <div className="agileBoard__container__searchSection__searchbar">
      <i className="fe fe-search agileBoard__container__searchSection__searchbar__icon" />
      <input value={inputValue} onChange={handleChange}></input>
    </div>
  );
};

export default SearchSection;
