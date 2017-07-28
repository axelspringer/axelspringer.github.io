import React from 'react';
import './Footer.scss';

import Socials from '../../components/Socials/Socials'

export default (props) => {
  return (
    <footer className='footer__container'>
      <div className='footer__content'>
        <Socials />
        <p className='footer__links'>
          <a href='http://www.axelspringer.de/artikel/Impressum_40386.html'>Impressum</a>
          <a href='http://www.axelspringer.de/artikel/Hinweise-zum-Datenschutz_40410.html'>Hinweise zum Datenschutz</a>
        </p>
      </div>
    </footer>
  );
}