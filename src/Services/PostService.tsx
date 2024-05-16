import axios from "axios";
import {PostCreate} from "../DataType/Post";

const API_URL = "http://localhost:8000";

export default async function getAllPosts()
{
    return await axios.get(`${API_URL}/posts`);
}

export async function addPost(post: PostCreate, token: string)
{
    return await axios.post(`${API_URL}/posts`, post, {
        params: { token: token }});
}

export async function getUserPosts(token: string){
    return await axios.get(`${API_URL}/posts/${token}`);
}