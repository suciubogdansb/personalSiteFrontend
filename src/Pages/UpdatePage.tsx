import AdminToolBar from "../Components/AdminToolBar";
import UpdateForm from "../Components/UpdateForm";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {usePostStore} from "../Store/PostStore";
import useGetAllPosts from "../Hooks/useGetAllPosts";
import useGetPost from "../Hooks/useGetPost";

export default function UpdatePage() {
    const {id} = useParams();
    const posts = usePostStore((state) => state.posts);
    const getPost = usePostStore((state) => state.getPost);
    const getPosts = useGetAllPosts();
    const post = useGetPost(id, getPost);

    useEffect(() => {
        if (posts.length === 0) {
            getPosts();
        }
    }, [post, getPosts]);

    return (
        <div>
            <AdminToolBar></AdminToolBar>
            <div className="AdminPage">
                <UpdateForm key="AddForm" post={post}></UpdateForm>
            </div>
        </div>
    );
}