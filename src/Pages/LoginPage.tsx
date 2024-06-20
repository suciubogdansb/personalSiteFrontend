import {useState} from "react";
import useLoginHook from "../Hooks/useLoginHook";
import LoginForm from "../Components/LoginForm";
import "../Style/LoginPage.css";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = useLoginHook({
        username,
        password,
        setError,
    });

    return (
        <div className="mainContainer">
            <div className="authenticationForm">
                <LoginForm
                    setUsername={setUsername}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />
                {error && <div className="Error">{error}</div>}
            </div>
        </div>
    );
}
