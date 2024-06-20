import {PostWithUser} from "../DataType/Post";
import React from "react";
import {useTokenStore} from "../Store/TokenStore";
import {usePostStore} from "../Store/PostStore";
import {useNavigate} from "react-router-dom";
import {updatePost} from "../Services/PostService";

export default function useUpdatePost({postId, title, content, image, setError}:
                                           {
                                               postId: string | undefined;
                                               title: string;
                                               content: string;
                                               image: File | null;
                                               setError: React.Dispatch<React.SetStateAction<string>>;
                                           }) {
    const token = useTokenStore((state) => state.token);
    const updatePostStore = usePostStore((state) => state.updatePost);
    const navigate = useNavigate();

    return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(title, content);
        e.preventDefault();

        if (title === "" || content === "") {
            setError("Title and content must not be empty");
            return;
        }

        if (postId === undefined) {
            setError("Post not found");
            return;
        }

        updatePost(postId, token, title, content, image)
            .then((response) => {
                console.log("Post added");
                const postId = response.data.postId;
                const username = response.data.username;
                const creationDate = new Date(response.data.creationDate);
                const userId = response.data.userId;
                const filepath = response.data.filepath;
                const post: PostWithUser = {title, content, postId, username, creationDate, userId, filepath};
                updatePostStore(post);
                navigate(`/admin/posts`)
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "ERR_NETWORK") {
                    navigate("/error");
                } else if (
                    error.response.status === 401 ||
                    error.response.status === 404 ||
                    error.response.status === 400
                ) {
                    setError(error.response.data.detail);
                }
            });
    };
}
