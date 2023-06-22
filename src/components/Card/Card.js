import './Card.scss'
import React from 'react';
import { useParams } from 'react-router-dom';
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
      <h1 className='card__title'>{activeCard.card}</h1>
      <p>{activeCard.description}</p>
      <p>{activeCard.category}</p>
      <p>{activeCard.planet}</p>
      <p>{activeCard.sign}</p>
    </section>
  );
};

export default Card;