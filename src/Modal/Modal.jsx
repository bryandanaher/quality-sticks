import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, title, text }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modalBackground" />
        <div className="modalWrapper"
            aria-modal aria-hidden tabIndex={-1} role="dialog"
            onClick={hide}>
            <div className="modal">
                <div className="modalHeader">
                    <h2>{title}</h2>
                </div>
                    <div className="modalBody">
                <p>{text}</p>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;