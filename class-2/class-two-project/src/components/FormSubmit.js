import React, { useState } from "react";

export const FormSubmit = () => {
  const [PlannetInfo, setPlannetInfo] = useState({
    planetName: "",
    planetGravity: "",
  });

  const FormSubmit = (event) => {
    event.preventDefault();
    console.log("Planet Added Successfully!");
    console.log(PlannetInfo);
  };

  const PlanetNameChange = (event) => {
    setPlannetInfo({
      ...PlannetInfo,
      planetName: event.target.value,
    });
  };

  const PlanetGravityChange = (event) => {
    setPlannetInfo({
      ...PlannetInfo,
      planetGravity: event.target.value,
    });
  };

  // export const FormSubmit = () => {
  //     const FormSubmit = (event) => {
  //         event.preventDefault();
  //         const planetName = event.target.planetName.value;
  //         const planetGravity = event.target.planetGravity.value;
  //         console.log(planetName, planetGravity);
  //     }

  return (
    <form onSubmit={FormSubmit}>
      <label htmlFor="planetName">Planet Name: </label>
      <input
        type="text"
        onChange={(e) => PlanetNameChange(e)}
        id="planetName"
        name="planetName"
      />

      <label htmlFor="planetGravity">Planet Gravity: </label>
      <input
        type="planetGravity"
        onChange={(e) => PlanetGravityChange(e)}
        id="planetGravity"
        name="planetGravity"
      />
      <button type="submit">Add Planet</button>
    </form>
  );
};
