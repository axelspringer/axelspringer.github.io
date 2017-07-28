import HttpService from './HttpService';

class GitHubService {
    constructor() {
        this.baseUrl = '/cached-api';
    }

    getStats(owner, project) {
        return HttpService.get(this.baseUrl + '/' + owner + '/' + project);
    }
}

export default new GitHubService();