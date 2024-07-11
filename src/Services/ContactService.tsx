import axios from "axios";
import {ContactBase} from "../DataType/Contact";

const API_URL = "http://localhost:8000"

export async function addContact(contact: ContactBase) {
    return await axios.post(`${API_URL}/contacts`, contact);
}

export async function getAllContacts() {
    return await axios.get(`${API_URL}/contacts`);
}