import React from "react";
import { Modal, ModalBody } from "reactstrap";
import "./SearchIssueModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faCheckSquare,
  faBookmark,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "./../../../Provider";

const SearchIssueModal = ({ isOpen, toggle }) => {
  const {
    filteredCards,
    searchInputValue,
    handleSearchInputChange,
    filteredOptions,
    extractValues,
    toggle1
  } = React.useContext(Context);

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="search-issue-modal"
      wrapClassName="search-issue-modal-container"
    >
      <ModalBody className="search-issue-modal-body">
        <div className="search-issue-cancel-div">
          <FontAwesomeIcon
            icon={faTimes}
            className="times-icon"
            onClick={toggle}
          />
        </div>
        <div className="search-issues-div">
          <FontAwesomeIcon
            icon={faSearch}
            className="search-issues-search-icon"
          />
          <input
            placeholder="Search issues by summary, description"
            value={searchInputValue}
            onChange={handleSearchInputChange}
          ></input>
        </div>
        <div className="search-result-label">
          {searchInputValue === "" ? "Recent Issues" : "Matching Issues"}
        </div>
        <div style={{ marginLeft: "1em" }}>
          {filteredOptions.map(item => (
            <div
              className="search-option"
              onClick={() => {
                extractValues(item.id);
                toggle1();
                toggle();
              }}
            >
              {item.type === "task" ? (
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  className="search-issue-icon check"
                />
              ) : item.type === "story" ? (
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="search-issue-icon bookmark"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="search-issue-icon exclamation"
                />
              )}
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default SearchIssueModal;
