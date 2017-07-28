import React from 'react';
import './Socials.scss';

var FontAwesome = require('react-fontawesome');

export default (props) => {
    return (
        <p className={'socials__container ' + props.className}>
            <a href='https://www.xing.com/companies/axelspringerse' className='socials__item'><FontAwesome name='xing' /></a>
            <a href='https://de.linkedin.com/company/axel-springer-se' className='socials__item'><FontAwesome name='linkedin' /></a>
            <a href='https://www.instagram.com/axel_springer_karriere/' className='socials__item'><FontAwesome name='instagram' /></a>
            <a href='https://www.facebook.com/AxelSpringerKarriere/' className='socials__item'><FontAwesome name='facebook' /></a>
        </p>
    );
}