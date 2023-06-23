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
      <h1>{activeSign.sign}</h1>
      <p>{activeSign.description}</p>
      <span className='sign__links-container'>
        <Link className='sign__planet' to={`/planet/${activeSign.planet}`}>
          {activeSign.planet}
        </Link>
        <Link className='sign__planet' to={`/planet/${activeSign.planet2}`}>
          {activeSign.planet2}
        </Link>
      </span>
      <img className='sign__img' src={activeSign.img} />
    </section>
  );
};

export default Sign;