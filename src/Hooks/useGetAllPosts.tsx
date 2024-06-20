import { usePostStore } from "../Store/PostStore";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {PostWithUser} from "../DataType/Post";
import getAllPosts from "../Services/PostService";

function getAllPostsHelper(
    posts: PostWithUser[],
    setPosts: (posts: PostWithUser[]) => void,
    navigate: NavigateFunction
)
{
  if (posts.length === 0) {
    getAllPosts()
        .then((response) => {
            console.log(response);
            const updatedPosts = response.data.map((post: PostWithUser) => {
                return {
                    ...post,
                    creationDate: new Date(post.creationDate)
                };
            });
            setPosts(updatedPosts);
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "ERR_NETWORK") {
            console.log("Network error");
            navigate("/error");
          }
        });
  }
}

export default function useGetAllPosts() {
  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);
  const navigate = useNavigate();

  return () => getAllPostsHelper(posts, setPosts, navigate);
}
