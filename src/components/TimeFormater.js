import React from 'react';
import './TimeFormater.scss'

function TimeFormater(props) {
  const minutes = Math.floor(props.time / 60);
  const seconds = props.time - minutes * 60;

  const doubleDigit = (number) => {
    // return ('0' + number).slice(-2)
    return number.toLocaleString('en-US', {minimumIntegerDigits: 2})
  }

  return (
    <>
      <div className="clock">{doubleDigit(minutes)}:{doubleDigit(seconds)}</div>
    </>
  )

}

export default TimeFormater;