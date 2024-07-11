import {Contact} from "../DataType/Contact";
import {Link} from "react-router-dom";
import {PostWithUser} from "../DataType/Post";
import {useState} from "react";
import {Button} from "react-bootstrap";
import useSendResponse from "../Hooks/useSendResponse";

export default function ContactListElement({contact}: { contact: Contact }) {
    const [open, setOpen] = useState(false);
    const contentWithBreaks = contact.message.split("\n");
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const sendEmail = useSendResponse(
        contact,
        response,
        setResponse,
        setOpen,
        setLoading
    )

    const handleSubmit = () => {
        if(loading)
            return;
        sendEmail();
    }

    return (
        <div style={{display:"flex"}}>
            <div className="ListElement" onClick={handleToggle} style={{cursor: "pointer"}}>
                <div className="TopBar">
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <div style={{fontStyle: "italic"}}>{contact.creationDate.toDateString()}</div>
                <div className="ListElementContent">{
                    contentWithBreaks.map((line, index) => {
                        return <div key={index}>{line}</div>
                    })
                }</div>
            </div>
            {open && (
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "1rem"}}>
                    <textarea
                        style={{height: "90%", minHeight: "170px", width: "fit-content",
                            resize: "none", backgroundColor: "black", color: "white",
                            fontFamily: "Haettenschweiler, 'Arial Bold', sans-serif", fontSize: ".85rem",
                            border: "2px solid white"
                        }}
                        placeholder="Type your response here..."
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        cols={50}
                    />
                    <Button onClick={handleSubmit /* Implement this */}
                            className="addButton"
                            style={{width: "fit-content", fontSize: ".85rem", padding: "5px",
                                margin: 0
                            }}
                    >{loading ? "Sending..." : "Send"}</Button>
                </div>
            )}
        </div>
    );
}