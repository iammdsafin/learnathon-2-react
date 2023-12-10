import { useState } from "react";

export function PropsFunctionalComponent(props) {
  //usindg state in functional component
  const [rotation, setCount] = useState("24.0 hours");

  return (
    <div>
      <h1>Planet Earth Informations</h1>
      <p>Name: {props.name}</p>
      <p>Gravity: {props.gravity}</p>
      <p>Population: {props.population}</p>
      <p>Earth Rotation: {rotation}</p>
    </div>
  );
}
