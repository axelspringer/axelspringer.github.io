import PiwikTracker from 'piwik-tracker';

const BASE_URL = 'https://ideas.piwik.pro';
const SITE_ID = '29';

class TrackingService {
    constructor() {
        this.tracker = new PiwikTracker(
            SITE_ID, BASE_URL + '/piwik.php'
        );

        this.tracker.on('error', function (err) {
            console.error('Error tracking request: ', err)
        })
    }

    trackPage() {
        this.tracker.track(window.location.href);
    }

    trackEvent(category, action, name) {
        let track = {
            url: window.location.href
        };

        if (name) track.e_n = name;
        if (action) track.e_a = action;
        if (category) track.e_c = category;


        this.tracker.track(track);
    }
}

export default new TrackingService();