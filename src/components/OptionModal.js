import React from "react";
import Modal from "react-modal";

const OptionModal= (props) => {
    return(
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelection}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.handleClearSelection && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelection}>Okay</button>
        </Modal>
    )
};

export default OptionModal;