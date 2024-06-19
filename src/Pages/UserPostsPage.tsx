import AdminToolBar from "../Components/AdminToolBar";
import UserPostList from "../Components/UserPostList";
import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function UserPostsPage() {
    return (
        <div>
            <AdminToolBar/>
            <div className="AdminPage">
                <UserPostList/>
                <Link to={"/admin/posts/add"} style={{height: "fit-content"}}>
                    <Button className="addButton">Add Post</Button>
                </Link>
            </div>
        </div>
    );
}
