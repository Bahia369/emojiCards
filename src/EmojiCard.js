import React from "react";
import emoji from "./data.js";

const emojiCard = (props) => {
  return (
    <div className="contact-card">
      <h2>{props.emoji.title}</h2>
      <img src={props.img} className="img" />
      <h2>{props.emoji.symbol}</h2>
      <h2>{props.emoji.keywords}</h2>
    </div>
  );
};

export default emojiCard;
