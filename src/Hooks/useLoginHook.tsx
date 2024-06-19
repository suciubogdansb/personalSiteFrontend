import { useTokenStore } from "../Store/TokenStore";
import { useNavigate } from "react-router-dom";
import LoginUser from "../DataType/LoginUser";
import { login } from "../Services/UserService";

interface UseLoginHook {
  username: string;
  password: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export default function useLoginHook({
  username,
  password,
  setError,
}: UseLoginHook) {
  const setToken = useTokenStore((state) => state.setToken);
    const setRole = useTokenStore((state) => state.setRole);
  const navigate = useNavigate();
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const user: LoginUser = {
      username: username,
      password: password,
    };
    login(user)
      .then((response) => {
        console.log("User logged in");
        setToken(response.data.token);
        const role: number = response.data.role;
        setRole(role);
        navigate("/admin");
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          navigate("/error");
        } else if (
          error.response.status === 400 ||
          error.response.status === 404
        ) {
          setError(error.response.data.detail);
        }
      });
  };

  return handleSubmit;
}
