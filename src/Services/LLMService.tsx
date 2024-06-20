import BotResponse from "../DataType/BotResponse";
import axios from "axios";

const API_URL = "http://localhost:8000"
export default async function getResponse(userRequest: BotResponse){
    return await axios.post(`${API_URL}/chat`, userRequest);
}