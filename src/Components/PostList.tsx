import {PostWithUser} from "../DataType/Post";
import PostListElement from "./PostListElement";

export default function PostList({ posts }: { posts: PostWithUser[] }) {
  return (
    <div className="PostsDiv">
      {posts.map((post) => (
        <PostListElement key={post.postId} post={post} />
      ))}
    </div>
  );
}
