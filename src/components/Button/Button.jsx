import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ handleClick, buttonName }) => {

  return (
    <>
      <button
        type="button"
        onClick={() => handleClick(true)}
        className="modal-button"
      >
        {buttonName}
      </button>
      <div className="modal-button__shadow" />
    </>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
}
