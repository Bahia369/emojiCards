import React from "react";
const Card = (props) => {
  return (
    <div className="contact-card">
      <h2>
        {props.name.title} {props.name.first} {props.name.last}
      </h2>
      <img src={props.img} className="img" />
      <h3> {props.email} </h3>
      <h2>{props.location}</h2>
      <h2> {props.tel} </h2>
      <h2>{props.id}</h2>
    </div>
  );
};
export default Card;
