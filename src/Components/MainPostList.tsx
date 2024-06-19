import {PostWithUser} from "../DataType/Post";
import PostListElement from "./PostListElement";
import MainPostElement from "./MainPostElement";

export default function MainPostList({ posts }: { posts: PostWithUser[] }) {
    return (
        <div className="MainPostDiv">
            {posts.map((post) => (
                <MainPostElement key={post.postId} post={post} />
            ))}
        </div>
    );
}
