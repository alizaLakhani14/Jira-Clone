import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import "./DeleteModal.scss";
import { Context } from "./../../.../../../../../../Provider.jsx";

const DeleteModal = ({ isOpen, toggleIsOpen, toggle }) => {
  const { handleDelete, selectedCard } = React.useContext(Context);
  return (
    <Modal isOpen={isOpen} toggle={toggleIsOpen} centered>
      <ModalBody className="delete-modal">
        <h1>Are you sure you want to delete this issue?</h1>
        <p>Once you delete, it's gone for good.</p>
        <div className="delete-modal__buttons">
          <Button
            color="primary"
            onClick={() => {
              handleDelete(selectedCard[0].id);
              toggleIsOpen();
              toggle();
            }}
          >
            Delete Issue
          </Button>
          <Button onClick={toggleIsOpen} className="delete-cancel-button">
            Cancel
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
