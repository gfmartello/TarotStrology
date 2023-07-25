import React from 'react';
import './Header.scss'
import cards from '../../data/cards.json'
import planets from '../../data/planets.json'
import signs from '../../data/signs.json'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [cardsOpen, setCardsOpen] = useState(false);

  function handleCards() {
    setCardsOpen(!cardsOpen);
  }

  const [planetsOpen, setPlanetsOpen] = useState(false);

  function handlePlanets() {
    setPlanetsOpen(!planetsOpen);
  }

  const [signsOpen, setSignsOpen] = useState(false);

  function handleSigns() {
    setSignsOpen(!signsOpen);
  }

  const cardsList = cards.map((card) => (
    <Link className='nav__list-item' to={`/card/${card.key}`} key={card.card}>
      <li
        className='nav__list-item'>
        {card.card}
      </li>
    </Link>
  ))

  const planetsList = planets.map((planet) => (
    <Link className='nav__list-item' to={`/planet/${planet.planet.split(' ')[0]}`} key={planet.planet}>
      <li
        className='nav__list-item'>
        {planet.planet}
      </li>
    </Link>
  ))

  const signsList = signs.map((sign) => (
    <Link className='nav__list-item' to={`/sign/${sign.sign.split(' ')[0]}`} key={sign.sign}>
      <li
        className='nav__list-item'>
        {sign.sign}
      </li>
    </Link>
  ))

  return (
    <header className='header'>
      <Link to='/' className='header__title'>
        <h1 className='header__title'>TAROTSTROLOGY ☿</h1>
      </Link>
      <nav className={cardsOpen ? 'nav__active' : 'nav__cards'}>
        <h3 className='nav__title' onClick={handleCards}>CARDS</h3>
        {
          cardsOpen ? (
            <ul className='nav__list'>
              {cardsList}
            </ul>
          ) : null
        }
      </nav>
      <nav className='nav__planets'>
        <h3 className='nav__title' onClick={handlePlanets}>PLANETS</h3>
        {
          planetsOpen ? (
            <ul className='nav__list'>
              {planetsList}
            </ul>
          ) : null
        }
      </nav>
      <nav className='nav__signs'>
        <h3 className='nav__title' onClick={handleSigns}>SIGNS</h3>
        {
          signsOpen ? (
            <ul className='nav__list'>
              {signsList}
            </ul>
          ) : null
        }
      </nav>
      <Link className='nav__title' to='/mycard'>
        <h3 className='nav__title'>WHAT'S MY CARD?</h3>
      </Link>
      <Link className='nav__title' to='/consultations'>
        <h3>CONSULTATIONS</h3>
      </Link>
    </header>
  );
};

export default Header;