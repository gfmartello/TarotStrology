import React from 'react';
import './Header.scss'
import cards from '../../data/cards.json'
import planets from '../../data/planets.json'
import signs from '../../data/signs.json'
import elements from '../../data/elements.json'
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

  const [elementsOpen, setElementsOpen] = useState(false);

  function handleElements() {
    setElementsOpen(!elementsOpen);
  }

  const cardsList = cards.map((card) => (
    <Link className='nav__list-item' to={`/card/${card.key}`}>
      <li
        key={card.card}
        className='nav__list-item'>
        {card.card}
      </li>
    </Link>
  ))

  const planetsList = planets.map((planet) => (
    <Link className='nav__list-item' to={`/planet/${planet.planet.split(' ')[0]}`}>
      <li
        key={planet.planet}
        className='nav__list-item'>
        {planet.planet}
      </li>
    </Link>
  ))

  const signsList = signs.map((sign) => (
    <Link className='nav__list-item' to={`/sign/${sign.sign.split(' ')[0]}`}>
      <li
        key={sign.sign}
        className='nav__list-item'>
        {sign.sign}
      </li>
    </Link>
  ))

  const elementsList = elements.map((element) => (
    <Link className='nav__list-item' to={`/element/${element.element.split(' ')[0]}`}>
      <li
        key={element.element}
        className='nav__list-item'>
        {element.element}
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
      <nav className='nav__elements'>
        <h3 className='nav__title' onClick={handleElements}>ELEMENTS</h3>
        {
          elementsOpen ? (
            <ul className='nav__list'>
              {elementsList}
            </ul>
          ) : null
        }
      </nav>
      <Link className='nav__title' to='/mycard'>
        <h3 className='nav__title'>WHAT'S MY CARD?</h3>
      </Link>
    </header>
  );
};

export default Header;