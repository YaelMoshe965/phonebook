const axios = require('axios');

export const phonebookService = {
    query,
    getById
}

function query() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.data);
}

function getById(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.data);
}