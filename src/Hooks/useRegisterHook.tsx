import UserCreate from "../DataType/UserCreate";
import {register} from "../Services/UserService";
import {useTokenStore} from "../Store/TokenStore";
import {Navigate, useNavigate} from "react-router-dom";

interface UseRegisterHook {
    username: string;
    password: string;
    email: string;
    setFailedLogin: React.Dispatch<React.SetStateAction<boolean>>
    setError: React.Dispatch<React.SetStateAction<string>>
}

export default function useRegisterHook({username,
                                        password,
                                        email,
                                        setFailedLogin,
                                        setError
    }: UseRegisterHook) {
    const setToken = useTokenStore(state => state.setToken);
    const navigate=useNavigate();
    const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const user: UserCreate = {
            username: username,
            email: email,
            password: password
        }
        register(user)
            .then((response) => {
                console.log("User registered")
                setToken(response.data.token);
                navigate("/");
            })
            .catch((error) => {
                if(error.code === "ERR_NETWORK")
                {
                    navigate("/error");
                }
                else if (error.response.status === 400 || error.response.status === 404)
                {
                    setFailedLogin(true);
                    setError(error.response.data.detail)
                }
            });
    }

    return handleSubmit;
}