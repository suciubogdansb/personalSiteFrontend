import {promoteUser} from "../Services/UserService";
import {useUserStore} from "../Store/UserStore";


export default function usePromote(
    userId: string
) {
    const updateUser = useUserStore((state) => state.updateUser);
    const handlePromote = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        promoteUser(userId).then((response) => {
            console.log("User promoted");
            updateUser(response.data);
        })
            .catch((error) => console.log(error));
    }

    return handlePromote;
}