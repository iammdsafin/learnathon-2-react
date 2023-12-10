import logo from './logo.svg';
import './App.css';
import { PlanetEarthClassComponent } from './components/PlanetEarthClassComponent';
import { PropsFunctionalComponent } from './components/PropsFunctionalComponent';

function App() {
  return (
    // JSX elements must be wrapped in an enclosing tag <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Planet Earth! I am From React Second Class Project.
        </p>
        <PlanetEarthClassComponent/>
        <PropsFunctionalComponent
          name = {'Earth'}
          gravity = {'9.807 m/s²'}
          population = {'7.674 billion'}
        />
      </header>
    </div>
  );
}

export default App;
