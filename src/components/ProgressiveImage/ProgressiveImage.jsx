import React, { Component } from 'react';
import './ProgressiveImage.scss';

export default class ProgressiveImage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.refs.dummy.addEventListener('load', (e) => {
            let original = this.refs.original;
            if (original.classList) {
                original.classList.add('fadeIn');
            } else {
                original.className += ' fadeIn';
            }
        })
    }

    render() {
        let thumbStyle = {
            backgroundImage: 'url(' + this.props.thumbnail + ')',
            opacity: this.props.thumbnail ? 1 : 0,
            filter: 'blur(' + (this.props.blurRadius || 10) + 'px)'
        };

        let origStyle = {
            backgroundImage: 'url(' + this.props.src + ')'
        };

        return (
            <div className={'progressiveImage__container ' + this.props.className}>
                <div className='progressiveImage__thumbnail progressiveImage__thumbnail--background' style={thumbStyle} />
                <div className={'progressiveImage__thumbnail' + (this.props.keepRatio ? ' progressiveImage__thumbnail--ratio' : '')} ref='thumbnail' style={thumbStyle} />
                <div className='progressiveImage__original' ref='original' style={origStyle} />
                <img className="progressiveImage__dummy" ref='dummy' src={this.props.src} alt='' />
            </div>
        );
    }
}