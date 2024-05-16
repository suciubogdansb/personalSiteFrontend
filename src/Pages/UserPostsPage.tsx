import ToolBar from "../Components/ToolBar";
import UserPostList from "../Components/UserPostList";
import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function UserPostsPage(){
    return (
        <div>
            <ToolBar/>
            <Link to={"/add"}><Button>Add Post</Button></Link>
            <UserPostList/>
        </div>
    )
}