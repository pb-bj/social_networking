import axios from 'axios';
import { API_URL } from '../config';

export const registerPostRequest = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, formData);
        if (response.data.message) {
            return response.data;
        } else {
            return response.data;
        }

    } catch (error) {
        return error.response.data;
    }
};

export const loginPostRequest = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, formData, { withCredentials: true });
        return response.data;

    } catch (error) {
        return error.response.data;
    }
};


export const userDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/api/user-profile/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const updateUserDetails = async (userId, formData, token) => {
    try {
        const response = await axios.put(`${API_URL}/api/user-profile/edit/${userId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        // console.log(response.data)
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
