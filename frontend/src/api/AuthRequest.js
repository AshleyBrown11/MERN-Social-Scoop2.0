import axios from 'axios'


const API = axios.create({ DATABASE_URL: 'http://localhost:5173' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
