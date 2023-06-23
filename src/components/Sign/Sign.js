import './Sign.scss'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import signs from '../../data/signs.json'

const Sign = () => {
  const { signId } = useParams()

  const json = signs
  const activeSign = json.find(item =>
    item.sign.includes(signId)
  )

  return (
    <section className='sign'>
      <div className='sign__container'>
        <h1>{activeSign.sign}</h1>
        <p>{activeSign.description}</p>
        <Link className='sign__link' to={`/element/${activeSign.element}`}>
          <p>{activeSign.element}</p>
        </Link>
        <Link className='sign__link' to={`/modality/${activeSign.modality}`}>
          <p>{activeSign.modality}</p>
        </Link>
        <span className='sign__links-container'>
          <Link className='sign__link' to={`/planet/${activeSign.planet}`}>
            {activeSign.planet}
          </Link>
          <Link className='sign__link' to={`/planet/${activeSign.planet2}`}>
            {activeSign.planet2}
          </Link>
        </span>
      </div>
      <img className='sign__img' src={activeSign.img} />
    </section>
  );
};

export default Sign;