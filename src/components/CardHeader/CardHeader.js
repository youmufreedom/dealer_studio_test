import React from 'react';
import './CardHeader.scss';

const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

export default CardHeader;
