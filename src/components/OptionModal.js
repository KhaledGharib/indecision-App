import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
    onRequestClose={props.handleClear}
    isOpen={!!props.selectedOption}
    contentLabel="Selected option"
  >
    <h3 className="modal__title">Selected option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClear}>
      Sounds Good 👍
    </button>
  </Modal>
);

export default OptionModal;
