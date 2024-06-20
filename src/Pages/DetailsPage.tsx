import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostWithUser } from "../DataType/Post";
import { usePostStore } from "../Store/PostStore";
import AdminToolBar from "../Components/AdminToolBar";
import PostDetails from "../Components/PostDetails";
import useGetAllPosts from "../Hooks/useGetAllPosts";
import useGetPost from "../Hooks/useGetPost";
import DetailPageControls from "../Components/DetailPageControls";

export default function DetailsPage() {
    const {id} = useParams();
    const [element, setElement] = useState<PostWithUser | undefined>(undefined);
    const posts = usePostStore((state) => state.posts);
    const getPost = usePostStore((state) => state.getPost);
    const getPosts = useGetAllPosts();
    const post = useGetPost(id, getPost);

    useEffect(() => {
        if (posts.length === 0) {
            getPosts();
        }

        setElement(post)
    }, [post, getPosts]);

    return (
        <div>
            <AdminToolBar/>
            <div className="AdminPage">
                <PostDetails element={element}/>
                <DetailPageControls element={element}/>
            </div>
        </div>
    )

}