import React from 'react';
import ReactDOM from 'react-dom';
import TimeFormater from './TimeFormater';
import './Timer.scss';

function Timer(props) {
  const [seconds, setSeconds] = React.useState(props.time);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      if (props.modal) displayModal(props.modal);
    }
  });

  const displayModal = (modal) => {
    props.handleCount();
    ReactDOM.render(modal, document.getElementsByClassName('modal-window')[0]);
  }

  let message;

  if (props.message) message = <p>{props.message}</p>;

  return (
    <div className="center-timer">
      <div className="button-shape">
        {message}
        <TimeFormater time={seconds} />
      </div>
      <div className="modal-window">
      </div>
    </div>
  );
}

export default Timer;