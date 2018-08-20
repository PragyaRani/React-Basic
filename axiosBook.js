import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://www.googleapis.com/books/v1/'
    baseURL: 'http://localhost:3001'
});

export default instance;