import React from "react";
import "./Card.css";

const Card = ({ mass }) => {
  return (
    <div className="card">
      <img className="img" src={mass.img} alt="img" />
      <h3 className="title">{mass.title}</h3>
      <p className="text">{mass.text}</p>
    </div>
  );
};

export default Card;
