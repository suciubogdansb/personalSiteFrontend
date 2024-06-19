import {PostWithUser} from "../DataType/Post";
import {getPost} from "../Services/PostService";
import React from "react";

function getPostByIdHelper(
    postId: string | undefined,
    setElement: React.Dispatch<React.SetStateAction<PostWithUser | undefined>>

) {
    if (postId === undefined) {
        console.error("Post ID is undefined");
        return;
    }

    getPost(postId).then((response) => {
        let post = response.data as PostWithUser;
        post = {
            ...post,
            creationDate: new Date(post.creationDate)
        } as PostWithUser;
        console.log(post);
        setElement(post);
    }).catch((error) => {
        console.error(error);
    });
}

export default function useGetPostById(
    postId: string | undefined,
    setElement: React.Dispatch<React.SetStateAction<PostWithUser | undefined>>
) {
    return () => getPostByIdHelper(postId, setElement);
}