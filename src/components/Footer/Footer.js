import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='https://www.threads.net/@gf.martello' target="_blank">
        <img className='footer__logo' src='https://seeklogo.com/images/T/threads-logo-E9BA734BF6-seeklogo.com.png?v=638252100960000000' alt='threads logo' />
      </a>
      <a href='https://www.instagram.com/gf.martello/' target="_blank">
        <img className='footer__logo' src='https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png' alt='instagram logo' />
      </a>
      <a href='mailto:tarotstrology.consultations@gmail.com'>
        <img className='footer__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png' alt='gmail logo'/>
      </a>
    </footer>
  );
};

export default Footer;