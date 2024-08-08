// src/services/api.js
import axios from 'axios';

const API_URL = 'https://your-backend-url.appspot.com'; // Google App Engine URL

export const createCheckoutSession = (service) => {
    return axios.post(`${API_URL}/create-checkout-session`, service);
};

export const registerUser = (user) => {
    return axios.post(`${API_URL}/register`, user);
};

export const loginUser = (user) => {
    return axios.post(`${API_URL}/login`, user);
};

export const addService = (service) => {
    return axios.post(`${API_URL}/add_service`, service);
};

export const getServices = () => {
    return axios.get(`${API_URL}/get_services`);
};
