import React from "react";
import CardImage from "../CardImage/CardImage";
import CardHeader from "../CardHeader/CardHeader";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({
  id,
  isActive,
  onClick,
  imageSrc,
  header,
  bodyText,
  extraContent,
}) => {
  const hasExtraContent = extraContent && extraContent.length > 0;
  return (
    <div
      className={`card ${isActive ? "active" : ""} ${
        hasExtraContent ? "extra" : "regular"
      }`}
      onClick={() => onClick(id)}
    >
      <div className="card-content">
        <CardImage imageSrc={imageSrc} />
        <CardHeader>{header}</CardHeader>
        <CardBody>
          <p>{bodyText}</p>
          {hasExtraContent &&
            extraContent.map((text, index) => <p key={index}>{text}</p>)}
        </CardBody>
      </div>
      <Button text={`Button ${id}`} onClick={() => onClick(id)} />
    </div>
  );
};

export default Card;
