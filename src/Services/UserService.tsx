import UserCreate from "../DataType/UserCreate";
import axios from "axios";
import LoginUser from "../DataType/LoginUser";

const API_URL = "http://localhost:8000";

export async function register(user: UserCreate) {
    return await axios.post(`${API_URL}/authenticate`, user);
}

export async function login(user: LoginUser) {
    const params = new URLSearchParams();
    params.append('username', user.username);
    params.append('password', user.password);
    return await axios.post(`${API_URL}/login`, params);
}