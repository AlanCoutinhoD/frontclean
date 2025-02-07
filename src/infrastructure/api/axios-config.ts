import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://tu-api-url',
    headers: {
        'Content-Type': 'application/json'
    }
}); 