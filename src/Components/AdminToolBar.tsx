import {useTokenStore} from "../Store/TokenStore";
import {Link} from "react-router-dom";
import React from "react";
import {Role} from "../DataType/Role";
import Button from "react-bootstrap/Button";
import "../Style/AdminPage.css";


export default function AdminToolBar() {
    const token = useTokenStore((state) => state.token);
    const role = useTokenStore((state) => state.role);

    return (
        <div className="AdminToolBar">
            <div>
                <Link to="/admin">
                    <Button>Admin Home</Button>
                </Link>
                <Link to="/admin/posts">
                    <Button>My Posts</Button>
                </Link>
                {
                    role === Role.ADMIN && (
                        <Link to="/admin/users">
                            <Button>Manage Users</Button>
                        </Link>
                    )
                }
            </div>
            {token && (
                <div>
                    <Link to="/logout">
                        <Button>Logout</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
