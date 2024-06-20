import {getAllUsers} from "../Services/UserService";
import {useUserStore} from "../Store/UserStore";
import {useNavigate} from "react-router-dom";

export default function useGetUsers() {
    const users = useUserStore((state) => state.users);
    const setUsers = useUserStore((state) => state.setUsers);
    const navigate = useNavigate();

    if (users.length === 0) {
      getAllUsers()
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "ERR_NETWORK") {
            console.log("Network error");
            navigate("/error");
          }
        });
    }
}