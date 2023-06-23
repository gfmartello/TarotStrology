import './Element.scss'
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import elements from '../../data/elements.json'

const Element = () => {
  const { elementId } = useParams()

  const json = elements
  const activeElement = json.find(item =>
    item.element.includes(elementId)
  )

  return (
    <section className='element'>
      <h1>{activeElement.element}</h1>
      <p>{activeElement.description}</p>
      <Link className='element__link' to={`/sign/${activeElement.sign1}`}>
        <p>{activeElement.sign1}</p>
      </Link>
      <Link className='element__link' to={`/sign/${activeElement.sign2}`}>
        <p>{activeElement.sign2}</p>
      </Link>
      <Link className='element__link' to={`/sign/${activeElement.sign3}`}>
        <p>{activeElement.sign3}</p>
      </Link>
    </section>
  );
};

export default Element;