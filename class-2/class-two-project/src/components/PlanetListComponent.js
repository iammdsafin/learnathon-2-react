import React from "react";

export const PlanetListComponent = () => {
  const Planets = [
    {
      name: "Mercury",
      gravity: "3.7 m/s²",
    },
    {
      name: "Venus",
      gravity: "8.87 m/s²",
    },
    {
      name: "Earth",
      gravity: "9.807 m/s²",
    },
    {
      name: "Mars",
      gravity: "3.711 m/s²",
    },
    {
      name: "Jupiter",
      gravity: "24.79 m/s²",
    },
    {
      name: "Saturn",
      gravity: "10.44 m/s²",
    },
    {
      name: "Uranus",
      gravity: "8.87 m/s²",
    },
    {
      name: "Neptune",
      gravity: "11.15 m/s²",
    },
  ];
  return (
    <div>
      <h1>Planets List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gravity</th>
          </tr>
        </thead>
        <tbody>
          {Planets.map((planet) => (
            //as we are using map function we need to add key attribute and name is unique
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.gravity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
