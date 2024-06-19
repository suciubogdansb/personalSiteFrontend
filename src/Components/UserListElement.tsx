import {User} from "../DataType/User";
import {Button} from "react-bootstrap";
import usePromote from "../Hooks/usePromote";
import React from "react";
import useDelete from "../Hooks/useDelete";
import {Role} from "../DataType/Role";


interface UserListElementProps {
    user: User
}

export default function UserListElement(
    {
        user
    }: UserListElementProps
) {

    const handleEdit = usePromote(user.userId);
    const handleDelete = useDelete(user.userId);

    return (
        <tr key={user.userId}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            {user.role !== "ADMIN" &&
                <td className="ignored">
                    <Button className="EditButton" onClick={handleEdit}>Promote To Admin</Button>
                    <Button className="DeleteButton" onClick={handleDelete}>Delete</Button>
                </td>
            }
        </tr>
    );
}