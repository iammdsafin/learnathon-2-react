import { useState } from "react";

export function PropsFunctionalComponent(props) {
  //usindg state in functional component
  const [rotation, setTime] = useState("0 hours");
  const [isEarthRotating, startEarthRotating] = useState(props.isEarthRotating);

  return (
    <div>
      <h1>Planet Earth Informations</h1>
      <p>Name: {props.name}</p>
      <p>Gravity: {props.gravity}</p>
      <p>Population: {props.population}</p>
      <p>Earth Rotation Time: {rotation}</p>
      {isEarthRotating ? (
        <button
          onClick={() => {
            setTime("0 hours");
            startEarthRotating(false);
          }}
        > Stop Rotation </button>
      ) : (
        <button
          onClick={() => {
            setTime("24.0 hours");
            startEarthRotating(true);
          }}
        > Start Rotation </button>
      )}
    </div>
  );
}
