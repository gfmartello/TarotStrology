import './Sign.scss'
import React from 'react';
import { useParams } from 'react-router-dom';
import signs from '../../data/signs.json'

const Sign = () => {
  const {signId} = useParams()

  const json = signs
  const activeSign = json.find(item => 
    item.sign.includes(signId)
  )

  return (
    <section>
      <h1>{activeSign.sign}</h1>
      <p>Ruling planet: {activeSign.planet}</p>
      <p>{activeSign.description}</p>
    </section>
  );
};

export default Sign;