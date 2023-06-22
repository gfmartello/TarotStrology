import './Planet.scss'
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
      <span>
        <Link className='planet__sign' to={`/sign/${activePlanet.sign}`}>
          {activePlanet.sign}
        </Link>
        <br />
        <Link className='planet__sign' to={`/sign/${activePlanet.sign2}`}>
          {activePlanet.sign2}
        </Link>
      </span>
      <article className='planet__container'>
        <div className='planet__column'>
          <p>{activePlanet.description}</p>
          <img className='planet__img' src={activePlanet.planetimg} />
        </div>
        <div className='planet__column'>
          <p>{activePlanet.myth}</p>
          <img className='planet__img' src={activePlanet.mythimg} />
        </div>
      </article>
    </section>
  );
};

export default Planet;