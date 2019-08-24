import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-cotacao.herokuapp.com',
})

export default api;
