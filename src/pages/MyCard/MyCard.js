import './MyCard.scss'
import React from 'react';
import { useState } from 'react';
import cards from '../../data/cards.json'

const MyCard = () => {
  const json = cards
  const [birthdayCard, setBirthdayCard] = useState([])

  const birthdayFunction = (birthday) => {
    const sign = birthday.split(' ')[0]
    const signCards = json.filter(item =>
      item.sign?.includes(sign)
    )
    setBirthdayCard(signCards)
  }
  console.log(birthdayCard.img)

  return (
    <section className='my-card'>
      <h3 className='my-card__title'>WHAT'S MY CARD?</h3>
      <form className='my-card__form'>
        <select className='my-card__select' value={birthdayCard} onChange={e => birthdayFunction(e.target.value)}>
          <option value='select'>Select your birthday</option>
          <option>Aries (Mar 21 - Apr 20)</option>
          <option>Taurus (Apr 21 - May 20)</option>
          <option>Gemini (May 21 - Jun 20)</option>
          <option>Cancer (Jun 21 - July 21)</option>
          <option>Leo (Jul 22 - Aug 22)</option>
          <option>Virgo (Aug 23 - Sep 22)</option>
          <option>Libra (Sep 23 - Oct 22)</option>
          <option>Scorpio (Oct 23 - Nov 22)</option>
          <option>Sagittarius (Nov 23 - Dec 21)</option>
          <option>Capricorn (Dec 22 - Jan 19)</option>
          <option>Aquarius (Jan 20 - Feb 18)</option>
          <option>Pisces (Feb 19 - Mar 20)</option>
        </select>
      </form>
      {
        birthdayCard.length ? birthdayCard.map(item =>
          <article className='my-card__results'>
            <img className='my-card__img' src={item.img} />
            <div className='my-card__info'>
              <h3>{item.card}</h3>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>{item.planet}</p>
              <p>{item.sign}</p>
            </div>
          </article>
        ) : ''
      }
    </section>
  );
};

export default MyCard;