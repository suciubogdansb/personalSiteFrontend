import React, {useState} from 'react';
import '../Style/Chatbot.css';
import {Button} from "react-bootstrap";
import BotResponse from "../DataType/BotResponse";
import useChatbot from "../Hooks/useChatbot";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    const [message, setMessage] = useState<string>("");

    const [isRunning, setIsRunning] = useState<boolean>(false);

    const [responses, setResponses] = useState<BotResponse[]>([
        {
            message: "Hi! I am Bogdan's trusty assistant. If if you have questions 'bout him, just ask me! Or how knows? Maybe there something in the blog posts that might interest you.",
            role: "bot"
        }
    ]);

    const handleSubmit = useChatbot(
        message,
        setMessage,
        responses,
        setResponses,
        setIsRunning
    )


    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="ChatbotContainer">
            {isOpen ?
                <div className="ChatbotWindow">
                    <div className="ChatbotHeader">
                        <h2>Chatbot</h2>
                        <button onClick={toggleChatbot}>&times;</button>
                    </div>
                    <div className="ChatbotBody">
                        {responses.map((response, index) => {
                                const splitMessage = response.message.split("\n");
                                return (
                                    <div key={index} className={"Response" + response.role}>
                                        {splitMessage.map((message, index) =>
                                            <p key={index}>{message}</p>
                                        )}
                                    </div>
                                )
                            }
                        )}
                    </div>
                    <div className="ChatbotInput">
                        <input type="text"
                               placeholder="Type a message"
                               value={message}
                               onChange={(e) => setMessage(e.target.value)}/>
                        <Button
                            onClick={handleSubmit}
                        >{isRunning ? "Running..." : "Send"}</Button>
                    </div>
                </div>
                :
                <Button className="ChatbotToggle" onClick={toggleChatbot}>
                    Open Chat
                </Button>
            }
        </div>
    );
};

