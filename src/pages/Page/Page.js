import React from 'react';
import './Page.scss'
import cardback from '../../assets/cardback.jpg'
import cards from '../../data/cards.json'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Page = () => {
  const [randomCard, setRandomCard] = useState('')
  const [isActive, setIsActive] = useState(false);

  const json = cards

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handleClick() {
    const randomIndex = getRandomInt(json.length)
    setRandomCard(json[randomIndex])
    setIsActive(current => !current);
  }

  return (
    <section className='main'>
      <button className='main__button' onClick={handleClick}>
        <img className='main__button-img' src={cardback} onClick={handleClick} />
      </button>
      <article className={isActive ? 'main__card--active' : ''}>
        <div className='main__card'>
          <div className='main__card--column1'>
            <img className='main__card-img' src={randomCard.img} />
          </div>
          <div className='main__card--column2'>
            <Link className='main__card--title' to={`/card/${randomCard.key}`}>
              <h1>{randomCard.card}</h1>
            </Link>
            <p>{randomCard.description}</p>
            <p>{randomCard.category}</p>
            <Link className='main__card--planet' to={`/planet/${randomCard.planet}`}>
              <div>
                <p>{randomCard.planet}</p>
              </div>
            </Link>
            <Link className='main__card--sign' to={`/sign/${randomCard.sign}`}>
              <div>
                <p>{randomCard.sign}</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Page;