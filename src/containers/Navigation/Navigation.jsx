import React, { Component } from 'react';
import './Navigation.scss';

export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: '',
      showMenu: false
    }
  }

  isVisible(query) {
    let navHeight;

    if (this.state.showMenu) {
      navHeight = document.querySelector('.navigation__item--logo').offsetHeight;
    } else {
      navHeight = document.querySelector('nav').offsetHeight;
    }

    let scrollOffset = window.pageYOffset;
    return window.pageYOffset >= this.getElemOffset(query) - navHeight;
  }

  getElemOffset(query) {
    return document.querySelector(query).getBoundingClientRect().top + window.pageYOffset;
  }

  handleScroll(e) {
    let active = '';

    if (this.isVisible('.projects__container')) active = 'projects__container';
    if (this.isVisible('.jobs__container')) active = 'jobs__container';

    if (active != this.state.active) {
      let state = this.state;
      state.active = active
      this.setState(state);
    }
  }

  goTo(query) {
    let navHeight;

    if (this.state.showMenu) {
      navHeight = document.querySelector('.navigation__item--logo').offsetHeight;
    } else {
      navHeight = document.querySelector('nav').offsetHeight;
    }

    let elemOffset = this.getElemOffset(query);

    window.scrollTo(0, elemOffset - navHeight);


    let state = this.state;
    state.showMenu = false;
    this.setState(state);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  toggleMenu() {
    let state = this.state;
    state.showMenu = !state.showMenu;

    this.setState(state);
  }

  render() {
    return (
      <nav className={'navigation__container'}>
        <div className={"navigation__toggle" + (this.state.showMenu ? ' open' : '')} onClick={this.toggleMenu.bind(this)} >
          <span>menü</span>
        </div>
        <ul className={'navigation__list' + (this.state.showMenu ? ' open' : '')} >
          <li onClick={this.goTo.bind(this, '#home')} className={'navigation__item navigation__item--logo'} >
            <img className='navigation__logo' src='static/as_logo.svg' alt='Axel Springer SE Logo' />
          </li>
          <li onClick={this.goTo.bind(this, '#projects')} className={'navigation__item' + (this.state.active == 'projects__container' ? ' navigation__item--active' : '')}>
            Our Projects
          </li>
          <li onClick={this.goTo.bind(this, '#jobs')} className={'navigation__item' + (this.state.active == 'jobs__container' ? ' navigation__item--active' : '')}>
            Jobs
          </li>
        </ul>
      </nav>
    );
  }
}