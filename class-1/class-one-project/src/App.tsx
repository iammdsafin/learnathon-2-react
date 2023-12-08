import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokeButton from "./functionalComponets/pokeButton";
import NotPokeMe from "./functionalComponets/notPokeButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Hello Planet Earth! Let's explore and learn React!</p>

        <div className="pokeme-button">
          <PokeButton />
        </div>

        <div className="notpokeme-button">
          <NotPokeMe />
        </div>

      </header>
    </div>
  );
}

export default App;
