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
    <li
      key={card.card}
      className='nav__cards--item'>
      {card.card}
    </li>
  ))

  const planetsList = planets.map((planet) => (
    <li
      key={planet.planet}
      className='nav__planets--item'>
      {planet.planet}
    </li>
  ))

  const signsList = signs.map((sign) => (
    <li
      key={sign.sign}
      className='nav__signs--item'>
      {sign.sign}
    </li>
  ))

  return (
    <header className='header'>
      <Link to='/' className='header__title'>
        <h1>TAROTSTROLOGY</h1>
      </Link>
      <nav classname={cardsOpen ? 'nav__cards--active' : 'nav__cards'}>
        <h3 className='nav__title' onClick={handleCards}>CARDS</h3>
        {
          cardsOpen ? (
            <ul className='nav__cards--list'>{cardsList}</ul>
          ) : null
        }
      </nav>
      <nav className='nav__planets'>
        <h3 className='nav__title' onClick={handlePlanets}>PLANETS</h3>
        {
          planetsOpen ? (
            <ul className='nav__planets--list'>{planetsList}</ul>
          ) : null
        }
      </nav>
      <nav className='nav__signs'>
        <h3 className='nav__title' onClick={handleSigns}>SIGNS</h3>
        {
          signsOpen ? (
            <ul className='nav__signs--list'>{signsList}</ul>) : null
        }
      </nav>
    </header>
  );
};

export default Header;