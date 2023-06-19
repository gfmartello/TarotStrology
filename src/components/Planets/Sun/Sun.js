import React from 'react';
import planets from '../../../data/planets.json'

const Sun = () => {
  const json = planets

  return (
    <section>
      <h1>{json[0].planet}</h1>
      <p>{json[0].description}</p>
      <span>Associated sign:{json[0].sign}</span>
    </section>
  );
};

export default Sun;