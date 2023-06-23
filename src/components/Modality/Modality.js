import './Modality.scss'
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import modalities from '../../data/modalities.json'

const Modality = () => {
  const { modalityId } = useParams()

  const json = modalities
  const activeModality = json.find(item =>
    item.modality.includes(modalityId)
  )

  return (
    <section className='modality'>
      <h1>{activeModality.modality}</h1>
      <p>{activeModality.description}</p>
      <Link className='modality__link' to={`/sign/${activeModality.sign1}`}>
        <p>{activeModality.sign1}</p>
      </Link>
      <Link className='modality__link' to={`/sign/${activeModality.sign2}`}>
        <p>{activeModality.sign2}</p>
      </Link>
      <Link className='modality__link' to={`/sign/${activeModality.sign3}`}>
        <p>{activeModality.sign3}</p>
      </Link>
      <Link className='modality__link' to={`/sign/${activeModality.sign4}`}>
        <p>{activeModality.sign4}</p>
      </Link>
    </section>
  );
};

export default Modality;