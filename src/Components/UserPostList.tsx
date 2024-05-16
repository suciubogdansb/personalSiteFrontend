import useGetUserPosts from "../Hooks/useGetUserPosts";
import {usePostStore} from "../Store/PostStore";
import PostList from "./PostList";
import {useEffect, useState} from "react";


export default function UserPostList(){
    const privatePosts = usePostStore(state => state.privatePosts);
    const [hasLoadedPosts, setHasLoadedPosts] = useState(false);

    const getUserPosts = useGetUserPosts();

    useEffect(() => {
        if (!hasLoadedPosts) {
            getUserPosts();
            setHasLoadedPosts(true);
        }
    }, [hasLoadedPosts, getUserPosts]);

    return (
        <PostList
            posts={privatePosts}
        />
    )
}