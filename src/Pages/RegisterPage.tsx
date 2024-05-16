import {useState} from "react";
import useRegisterHook from "../Hooks/useRegisterHook";
import RegisterForm from "../Components/RegisterForm";

export default function RegisterPage() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [failedLogin, setFailedLogin] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = useRegisterHook({
        username,
        password,
        email,
        setFailedLogin,
        setError
    });


    return (
        <div>
            <RegisterForm
                setUsername={setUsername}
                setPassword={setPassword}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
            ></RegisterForm>
            {failedLogin && <div>{error}</div>}
        </div>
    )
}