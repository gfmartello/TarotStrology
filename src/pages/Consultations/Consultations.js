import React from 'react';
import './Consultations.scss'

const Consultations = () => {
  return (
    <section className='consultations'>
      <h1>CONSULTATIONS</h1>
      <p>To get a consultation using both tarot and astrology, <a href='mailto:gf.martello@gmail.com'>please send an email</a> with the following information collected from your birth certificate or from a parent/guardian.<br /> <br />
        <span className='consultations__blurb--special'>You must include:</span></p>
      <ul className='consultations__list'>
        <li>Your birthday (month, day, and year)</li>
        <li>Your exact birth time</li>
        <li>Your city of birth</li>
      </ul>
      <p className='consultations__blurb--special'>Consultations cannot be done without this information.</p>
      <h2>Methods/Modalities</h2>
      <p>Consultations are done using Western Tropical Astrology and Whole Sign Houses, as well as traditional Decans and their corresponding tarot cards and planetary significations. Physical tarot cards can also be pulled for clarification. <br />
        <h1>Pricing</h1>
        Consultations are $75 per session, but flexible for those who need an adjustment.
      </p>
    </section>
  );
};

export default Consultations;