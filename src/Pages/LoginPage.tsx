import {FormEvent, useState} from "react";
import useLoginHook from "../Hooks/useLoginHook";
import LoginForm from "../Components/LoginForm";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = useLoginHook({
        username,
        password,
        setError
    })

    return (
        <div>
            <LoginForm
                setUsername={setUsername}
                setPassword={setPassword}
                handleSubmit={handleSubmit}/>
            <Link to="/register">
                <Button>Register</Button>
            </Link>
            {error && <div className="Error">{error}</div>}
        </div>
    );
}