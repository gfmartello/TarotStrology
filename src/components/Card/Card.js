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
        <p>{activeCard.category}</p>
        <Link className='card__element' to={`/element/${activeCard.element}`}>
          <p>{activeCard.element}</p>
        </Link>
        <Link className='card__planet' to={`/planet/${activeCard.planet}`}>
          <p>{activeCard.planet}</p>
        </Link>
        <Link className='card__sign' to={`/sign/${activeCard.sign}`}>
          <p>{activeCard.sign}</p>
        </Link>
      </div>
    </section>
  );
};

export default Card;