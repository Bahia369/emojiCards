import React from "react";
import "./App.css";
import emojis from "./data.js";

const sampleEmoji = {
  title: "Grinning",
  symbol: "😀",
  keywords: "grinning face happy smiley emotion emotion",
};

function App() {
  console.log(sampleEmoji);
  return (
    <div className="App">
      <h1>Emojis</h1>

      <div className="row">{}</div>
    </div>
  );
}

export default App;
