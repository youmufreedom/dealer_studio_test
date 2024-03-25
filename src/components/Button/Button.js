import React from 'react';
import './Button.scss';

const Button = ({ text, onClick }) => (
  <button className="card-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
