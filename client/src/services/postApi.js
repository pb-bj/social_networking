import axios from 'axios';
import { API_URL } from '../config';

export const createPostRequest = async(formData, token)=>{
    try{
        const response = await axios.post(`${API_URL}/api/create-post`,formData,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        return error.response.data;
    }
};


export const getFeedPostsRequest = async()=>{
    try{
        const response = await axios.get(`${API_URL}/api/get-feed-post`);
        return response.data;
    }catch(error){
        return error.response.data;
    }
};

export const getUserPostsRequest = async(userId,token)=>{
    try{
        const response = await axios.get(`${API_URL}/api/get-user-post/${userId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        return error.response.data;
    }
};

export const updatePostRequest = async(postId, formData, token)=>{
    try{
        const response = await axios.put(`${API_URL}/api/update-post/${postId}`,formData,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        return error.response.data;
    }
};

export const deletePostRequest = async(postId, token)=>{
    try{
        const response = await axios.delete(`${API_URL}/api/delete-post/${postId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        return error.response.data;
    }
};