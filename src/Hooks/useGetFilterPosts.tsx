import {PostWithUser} from "../DataType/Post";
import {NavigateFunction, useNavigate} from "react-router-dom";
import getAllPosts, {getFilteredPosts} from "../Services/PostService";
import {usePostStore} from "../Store/PostStore";
import React from "react";

function getFilterPostsHelper(
    setPosts: React.Dispatch<React.SetStateAction<PostWithUser[]>>,
    filter: string,
    selected: string,
    navigate: NavigateFunction
) {
    getFilteredPosts(filter, selected)
        .then((response) => {
            console.log(response);
            const updatedPosts = response.data.map((post: PostWithUser) => {
                return {
                    ...post,
                    creationDate: new Date(post.creationDate)
                };
            });
            setPosts(updatedPosts);
        })
        .catch((error) => {
            console.log(error);
            if (error.code === "ERR_NETWORK") {
                console.log("Network error");
                navigate("/error");
            }
        });
}

export default function useGetFilterPosts(
    setPosts: React.Dispatch<React.SetStateAction<PostWithUser[]>>,
    filter: string,
    selected: string
) {
    const navigate = useNavigate();

    return () => getFilterPostsHelper(setPosts, filter, selected, navigate);
}