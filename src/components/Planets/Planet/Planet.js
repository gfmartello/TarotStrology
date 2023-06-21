import React from 'react';
import { useParams } from 'react-router-dom';
import planets from '../../../data/planets.json'

const Planet = () => {
  const {planetId} = useParams()

  const json = planets
  const activePlanet = json.find(item => 
    item.planet.includes(planetId)
  )

  return (
    <section>
      <h1>{activePlanet.planet}</h1>
      <p>{activePlanet.description}</p>
      <span>Associated sign: {activePlanet.sign}</span>
    </section>
  );
};

export default Planet;