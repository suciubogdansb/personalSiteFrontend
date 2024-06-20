import BotResponse from "../DataType/BotResponse";
import {Dispatch, SetStateAction} from "react";
import getResponse from "../Services/LLMService";

export default function useChatbot(
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
    responses: BotResponse[],
    setResponses: Dispatch<SetStateAction<BotResponse[]>>,
    setIsRunning: Dispatch<SetStateAction<boolean>>
) {
    return function handleSubmit() {
        if (message === "") {
            return;
        }
        const userRequest: BotResponse = {
            message: message,
            role: "user"
        }
        setIsRunning(true);
        setResponses([...responses, userRequest]);
        getResponse(userRequest)
            .then((response) => {
                setResponses([...responses, userRequest, response.data]);
            }).catch((error) => {
            console.error("Failed to get response:", error);
            setResponses([...responses, userRequest, {message: "Failed to get response", role: "error"}]);
        }).finally(() => {
            setMessage("");
            setIsRunning(false);
        });
    }
}
