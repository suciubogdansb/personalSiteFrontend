import {usePostStore} from "../Store/PostStore";
import getAllPosts from "../Services/PostService";
import {useNavigate} from "react-router-dom";

export default function useGetAllPosts() {
    const posts = usePostStore(state => state.posts);
    const setPosts = usePostStore(state => state.setPosts);
    const navigate = useNavigate();

    if(posts.length === 0){
        getAllPosts()
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
                if(error.code === "ERR_NETWORK"){
                    console.log("Network error")
                    navigate("/error")
                }
            })
    }

}