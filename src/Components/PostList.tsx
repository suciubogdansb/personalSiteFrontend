import {Post} from "../DataType/Post";
import PostListElement from "./PostListElement";

export default function PostList({posts}:
                                     { posts: Post[] }) {
    return (
        <div>
            {posts.map(post => (
                <PostListElement key={post.postId} post={post}/>
            ))}
        </div>
    )
}