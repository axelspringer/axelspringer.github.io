class HttpService {
    constructor() {

    }

    get(url) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.send();

            request.onreadystatechange = () => {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        var response = JSON.parse(request.responseText);
                        resolve(response);
                    } else {
                        reject(request.status, request.statusText)
                    }
                }
            };
        });
    }
}

export default new HttpService();