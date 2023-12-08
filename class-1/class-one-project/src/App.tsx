import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./functionalComponets/pokeButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Planet Earth! Let's explore and learn React!</p>
        <Button/>
      </header>
    </div>
  );
}

export default App;
