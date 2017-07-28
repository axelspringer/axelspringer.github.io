import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';

export default (props) => {
  function scrollDown() {
    let navHeight = document.querySelector('nav').offsetHeight;
    let elemOffset = document.querySelector('#home').getBoundingClientRect().bottom + window.pageYOffset

    window.scrollTo(0, elemOffset - navHeight);
  }

  return (
    <header className='hero__container' id='home'>
      <ProgressiveImage className='hero__image' src='static/work.jpg' thumbnail='static/thumbnails/work.jpg' />

      <div className='hero__imageContainer'>
        <div className='hero__bottomContainer'>
          <p className='hero__bottomText'>There‘s more to it.</p>
          <Socials className='hero__socials' />
        </div>
        {/*<img className='hero__scrollDown' src='static/arrow.png' onClick={scrollDown} />*/}
      </div>
      <p className='hero__text'>
        Nowadays the largest source of revenue at <strong>Axel Springer</strong> and it’s companies is the digital business. Hence, sharing of best practices and practical solutions plays a huge role in our everyday work. That’s why we’re going public with some of our projects here. <strong>We love the idea of cooperating inhouse and with everyone outside who can benefit from the things we’ve built.</strong> Even better if you join us in discussion and development!
      </p >
    </header >
  );
}