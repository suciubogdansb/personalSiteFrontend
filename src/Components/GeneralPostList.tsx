import { usePostStore } from "../Store/PostStore";
import PostList from "./PostList";
import useGetAllPosts from "../Hooks/useGetAllPosts";
import {useEffect, useState} from "react";

export default function GeneralPostList() {
  const posts = usePostStore((state) => state.posts);
  const [hasLoadedPosts, setHasLoadedPosts] = useState(false);
  const getPosts = useGetAllPosts();

  useEffect(() => {
    if (!hasLoadedPosts) {
      getPosts();
      setHasLoadedPosts(true);
    }
  }, [hasLoadedPosts, getPosts]);

  return <PostList posts={posts} />;
}
