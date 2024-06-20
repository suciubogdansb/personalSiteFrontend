import useGetUsers from "../Hooks/useGetUsers";
import {useUserStore} from "../Store/UserStore";
import UserListElement from "./UserListElement";
export default function UserList() {
    useGetUsers();
    const users = useUserStore((state) => state.users);

    return (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <UserListElement key={user.userId} user={user}/>
                ))}
            </tbody>
        </table>
    );
}