import {usePostStore} from "../Store/PostStore";
import PostList from "./PostList";
import useGetAllPosts from "../Hooks/useGetAllPosts";

export default function GeneralPostList(){
    const posts = usePostStore(state => state.posts);
    useGetAllPosts();

    return (
        <PostList
            posts={posts}
        />
    )
}