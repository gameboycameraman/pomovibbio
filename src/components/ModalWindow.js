import React from 'react';
import Timer from './Timer';
import './ModalWindow.scss';

function ModalWindow(props) {

  return (
    <div className="modal">
      {/* <div>{props.message}</div> */}
      <Timer time={props.time} styleClass="modal-timer" message={props.message} />
      <div className="button-center">
        <button className="button-shape" onClick={props.reset}>Reset</button>
      </div>
    </div>
  )
}

export default ModalWindow;