import './Card.scss'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cards from '../../data/cards.json'

const Card = () => {

  const { cardId } = useParams()

  const json = cards
  const activeCard = json.find(item =>
    item.key === cardId
  )

  return (
    <section className='card'>
      <div className='card__img-container'>
        <img className='card__img' src={activeCard.img} />
      </div>

      <div className='card__info'>
        <h1 className='card__title'>{activeCard.card}</h1>
        <p>{activeCard.description}</p>
        <span>{activeCard.indepth}</span>
        <Link className='card__link' to={`/planet/${activeCard.planet}`}>
          <p>{activeCard.planet}</p>
        </Link>
        <Link className='card__link' to={`/sign/${activeCard.sign}`}>
          <p>{activeCard.sign}</p>
        </Link>
        <Link className='card__link' to={`/element/${activeCard.element}`}>
          <p>{activeCard.element}</p>
        </Link>
        <p>{activeCard.category}</p>
      </div>
    </section>
  );
};

export default Card;