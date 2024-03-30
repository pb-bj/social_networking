import axios from 'axios';
import { API_URL } from '../config';

export const registerPostRequest = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, formData);
        console.log(response.data);
            return response.data;

    } catch(error) {
        console.log(error);
    }
};

export const loginPostRequest = async (formData) => {
    axios.defaults.withCredentials = true;
    try {
        const response = await axios.post(`${API_URL}/auth/login`, formData);
        console.log(response.data);
            return response.data;

    } catch(error) {
        console.log(error);
    }
}