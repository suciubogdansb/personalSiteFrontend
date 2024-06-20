import UserCreate from "../DataType/UserCreate";
import axios from "axios";
import LoginUser from "../DataType/LoginUser";

// const API_URL = "http://13.60.25.156";
const API_URL = "http://localhost:8000"

export async function register(user: UserCreate) {
  return await axios.post(`${API_URL}/authenticate`, user);
}

export async function login(user: LoginUser) {
  return await axios.post(`${API_URL}/login`, user);
}

export async function getAllUsers() {
  return await axios.get(`${API_URL}/users`);
}

export async function promoteUser(userId: string) {
  return await axios.put(`${API_URL}/users/${userId}`);
}

export async function deleteUser(userId: string) {
    return await axios.delete(`${API_URL}/users/${userId}`);
}