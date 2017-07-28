import React, { Component } from 'react';
import './Jobs.scss';

import Gallery from '../../components/Gallery/Gallery'
import TrackerService from '../../services/TrackingService'

export default (props) => {
    function goToJobs() {
        console.log('Track: goToJobs');
        TrackerService.trackEvent('Jobs', 'goToJobs', null)
    }

    return (
        <section className='jobs__container' id='jobs'>
            <div className='jobs__headingContainer'>
                <h2 className='sectionHeading jobs__heading'>Jobs</h2>
            </div>
            <Gallery />
            <div className='jobs__advertisement'>
                <p className='jobs__adHeading'>Want to code with us?</p>
                <p className='jobs__adSubheading'>We offer many vacancies in IT!</p>
            </div>
            <a onClick={goToJobs} className='jobs__buttonJobs button' href="https://career.axelspringer.com/">Find your new job</a>
        </section>
    );
}