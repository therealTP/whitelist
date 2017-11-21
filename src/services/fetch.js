import { get as getLS } from './localStorage';

const baseUrl = 'http://localhost:8080/api/v1';

const generateRequest = (method, endpoint, body) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const jwtHeader = 'Bearer ' + getLS('jwt');
    myHeaders.set('Authorization', jwtHeader);

    const init = { 
        method,
        body: JSON.stringify(body),
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
const get = (endpoint) => {
    const request = generateRequest('GET', endpoint);
    return fetch(request).then(handleFetchResponse);
};

const post = (endpoint, body) => {
    const request = generateRequest('POST', endpoint, body);
    return fetch(request).then(handleFetchResponse);
}

const put = (endpoint, body) => {
    const request = generateRequest('PUT', endpoint, body);
    return fetch(request).then(handleFetchResponse);
};

const del = (endpoint) => {
    const request = generateRequest('DELETE', endpoint);
    return fetch(request).then(handleFetchResponse);
};

export { get, post, put, del };