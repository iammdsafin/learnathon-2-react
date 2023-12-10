import logo from './logo.svg';
import './App.css';
import { PlanetEarthClassComponent } from './components/PlanetEarthClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Planet Earth! I am From React Second Class Project.
        </p>
        <PlanetEarthClassComponent/>
      </header>
    </div>
  );
}

export default App;
