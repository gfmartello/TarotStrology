import './Planet.js'
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import planets from '../../data/planets.json'

const Planet = () => {
  const { planetId } = useParams()

  const json = planets
  const activePlanet = json.find(item =>
    item.planet.includes(planetId)
  )

  return (
    <section className='planet'>
      <h1>{activePlanet.planet}</h1>
      <p>{activePlanet.description}</p>
      <span>Associated sign: {activePlanet.sign}</span>
      <img className='planet__img' />
    </section>
  );
};

export default Planet;