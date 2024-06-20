import "../Style/AdminPage.css";
import AdminToolBar from "../Components/AdminToolBar";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import UserList from "../Components/UserList";

export default function UserManagementPage() {
    return (
        <div>
            <AdminToolBar/>
            <div className="AdminPage">
                <UserList></UserList>
                <Link to="/admin/users/create" style={{height: "fit-content"}}>
                    <Button className="addButton">Add User</Button>
                </Link>
            </div>
        </div>
    );
}