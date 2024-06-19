import {useUserStore} from "../Store/UserStore";
import {deleteUser} from "../Services/UserService";

export default function useDelete(
    userId: string
) {
    const removeUser = useUserStore((state) => state.removeUser);
    const handlePromote = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        deleteUser(userId).then((response) => {
            console.log("User deleted");
            removeUser(userId);
        })
            .catch((error) => console.log(error));
    }

    return handlePromote;
}