import axios from "axios";

const API_URL = "http://localhost:8000"

export default async function getAllPosts() {
    return await axios.get(`${API_URL}/posts`);
}

export async function addPost(token: string, title: string, content: string, image: File | null) {
    const formData = new FormData();
    formData.append("token", token);
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
        formData.append('image', image);
    }

    return await axios.post(`${API_URL}/posts`, formData);
}

export async function getUserPosts(token: string) {
    return await axios.get(`${API_URL}/posts/${token}`);
}

export function getImage(postId: string, filepath: string){
    return `${API_URL}/posts/${postId}/image?filler=${filepath}`;
}

export async function deletePost(postId: string) {
    return await axios.delete(`${API_URL}/posts/${postId}`);
}

export async function updatePost(postId: string, token: string, title: string, content: string, image: File | null) {
    const formData = new FormData();
    formData.append("token", token);
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
        formData.append('image', image);
    }

    return await axios.put(`${API_URL}/posts/${postId}`, formData);
}

export async function getPost(postId: string) {
    return await axios.get(`${API_URL}/posts/${postId}`);
}

export async function getFilteredPosts(filter: string, option: string) {
    return await axios.get(`${API_URL}/filter/posts?filtered=${filter}&option=${option}`);
}