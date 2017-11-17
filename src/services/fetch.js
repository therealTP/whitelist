const baseUrl = 'http://localhost:9000';

const generateRequest = (method, endpoint, body) => {
    // Can add custom header config here:
    const myHeaders = new Headers();
    
    const init = { 
        method,
        body,
        headers: myHeaders,
        mode: 'cors',
        cache: 'no-cache'
    };

    return new Request(baseUrl + endpoint, init);
};

const handleFetchResponse = (res) => {
    if (res.ok) {
        return res.json();
    }

    throw Error;
}

/*
Each method should return a promise:
*/
const fetchService = {
    get(endpoint) {
        const request = generateRequest('GET', endpoint);
        return fetch(request).then(handleFetchResponse);
    },
    post(endpoint, body) {
        const request = generateRequest('POST', endpoint, body);
        return fetch(request).then(handleFetchResponse);
    },
    put(endpoint, body) {
        const request = generateRequest('PUT', endpoint, body);
        return fetch(request).then(handleFetchResponse);
    },
    delete(endpoint) {
        const request = generateRequest('DELETE', endpoint);
        return fetch(request).then(handleFetchResponse);
    }
}

module.exports = fetchService;