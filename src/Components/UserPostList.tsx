import { usePostStore } from "../Store/PostStore";
import { jwtDecode } from "jwt-decode";
import PostList from "./PostList";
import {useTokenStore} from "../Store/TokenStore";
import {useEffect, useState} from "react";
import useGetAllPosts from "../Hooks/useGetAllPosts";
import { TokenStructure } from "../DataType/TokenStructure";

export default function UserPostList() {
  const posts = usePostStore((state) => state.posts);

  const token = useTokenStore((state) => state.token);
  const decodedToken = jwtDecode(token);
  const tokenStructure = decodedToken as TokenStructure
  const userId = tokenStructure.userId;

  const privatePosts = posts.filter((post) => post.userId === userId);
  const [hasLoadedPosts, setHasLoadedPosts] = useState(false);
  const getPosts = useGetAllPosts();

  useEffect(() => {
    if (!hasLoadedPosts) {
      getPosts();
      setHasLoadedPosts(true);
    }
  }, [hasLoadedPosts, getPosts]);

  return <PostList posts={privatePosts} />;
}
