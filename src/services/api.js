import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jjf-rocket-backend.herokuapp.com/'
});

export default api;