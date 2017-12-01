import React from 'react';
import './GitHubStats.scss';

var FontAwesome = require('react-fontawesome');

import TrackerService from '../../services/TrackingService'

export default (props) => {

    function openRepo() {
        console.log('Track: goToRepo');
        TrackerService.trackEvent('Projects', 'goToRepo', props.stats.name);

        window.open(props.stats.html_url, '_blank');
    }

    return (
        <div className='gitHubStats__container' onClick={openRepo.bind(this)}>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesome name='code' /></p>
                <p className='gitHubStats__description'>{props.language}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesome name='code-fork' /></p>
                <p className='gitHubStats__description'>{props.stats.forks_count}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesome name='star' /></p>
                <p className='gitHubStats__description'>{props.stats.stargazers_count}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FontAwesome name='users' /></p>
                <p className='gitHubStats__description'>{props.stats.watchers_count}</p>
            </div>
        </div>
    );
}