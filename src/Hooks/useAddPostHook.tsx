import {PostCreate} from "../DataType/Post";
import React from "react";
import {addPost} from "../Services/PostService";
import {useTokenStore} from "../Store/TokenStore";
import {usePostStore} from "../Store/PostStore";

export default function useAddPostHook({title, content}: PostCreate) {
    const token = useTokenStore(state => state.token);
    const setPosts = usePostStore(state => state.setPosts);
    const posts = usePostStore(state => state.posts);
    const setPrivatePosts = usePostStore(state => state.setPrivatePosts);
    const privatePosts = usePostStore(state => state.privatePosts);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(title, content)
        e.preventDefault()

        addPost({title, content}, token)
            .then((response) => {
                console.log("Post added")
                const postId = response.data.postId;
                const username = response.data.username;
                setPosts([...posts, {title, content, postId, username}])
                setPrivatePosts([...privatePosts, {title, content, postId}])
                window.location.href = "/user";
            })
            .catch((error) => {
                console.log(error)
                if (error.code === "ERR_NETWORK") {
                    window.location.href = "/error";
                }
                else if (error.response.status === 401 || error.response.status === 404) {
                    window.location.href = "/login";
                }
            })
    }

    return handleSubmit
}