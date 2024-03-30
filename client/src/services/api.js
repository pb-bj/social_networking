import axios from 'axios';
import { API_URL } from '../config';

export const registerPostRequest = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, formData);
            if(response.data.message) {
                return response.data;
            } else {
                return response.data;
            }   

    } catch(error) {
        return error.response.data;
    }
};

export const loginPostRequest = async (formData) => {
    axios.defaults.withCredentials = true;
    try {
        const response = await axios.post(`${API_URL}/auth/login`, formData);
            return response.data;

    } catch(error) {
            return error.response.data;
    }
}