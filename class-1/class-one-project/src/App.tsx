import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NotPokeMeButton from "./Button";
import PokeMeButton from "./Button/pokeButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Hello Planet Earth! Let's explore and learn React!</p>

        <div className="pokeme-button">
          <PokeMeButton />
        </div>

        <div className="notpokeme-button">
          <NotPokeMeButton type="notpokeme" />
        </div>
      </header>
    </div>
  );
}

export default App;
