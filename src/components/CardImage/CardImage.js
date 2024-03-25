import React from 'react';
import './CardImage.scss';

const CardImage = ({ imageSrc }) => (
  <div className="card-image">
    <img src={imageSrc} alt="Card visual" />
  </div>
);

export default CardImage;
