import {useState} from "react";
import useRegisterHook from "../Hooks/useRegisterHook";
import RegisterForm from "../Components/RegisterForm";
import "../Style/LoginPage.css";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function RegisterPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [failedLogin, setFailedLogin] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const handleSubmit = useRegisterHook({
        username,
        password,
        email,
        setFailedLogin,
        setError,
    });

    return (
        <div className="mainContainer">
            <div className="authenticationForm">
                <RegisterForm
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                ></RegisterForm>
                <Link to="/admin/users">
                    <Button className="generalButton">Back</Button>
                </Link>
                {failedLogin && <div>{error}</div>}
            </div>
        </div>
    )
        ;
}
