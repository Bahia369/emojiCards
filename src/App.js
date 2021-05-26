import React from "react";
import App from "./App.css";
import emojis from "./data.js";
import reactDom from "react-dom";
import contacts from "./data.js";
import Card from "./Card";

function createCard(contact) {
  console.log(contact);
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.picture.medium}
      tel={contact.phone}
      email={contact.email}
      location={contact.location.country}
    />
  );
}

function App() {
  console.log(contacts);
  return (
    <div className="App">
      <h1> My Address Book </h1>
      <div className="main-container"> {contacts.map(createCard)} </div>
    </div>
  );
}

const sampleEmoji = {
  title: "Grinning",
  symbol: "😀",
  keywords: "grinning face happy smiley emotion emotion",
};

export default App;
