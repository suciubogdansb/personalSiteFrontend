import {usePostStore} from "../Store/PostStore";
import {getUserPosts} from "../Services/PostService";
import {useTokenStore} from "../Store/TokenStore";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {Post} from "../DataType/Post";
import {resolveObjectURL} from "node:buffer";

function getUserPost(
    token: string,
    privatePosts: Post[],
    setPrivatePosts: (posts: Post[]) => void,
    navigate: NavigateFunction
){
    if (privatePosts.length === 0){
        getUserPosts(token)
            .then(response => {
                setPrivatePosts(response.data)
            })
            .catch(error => {
                console.log(error)
                if (error.code === "ERR_NETWORK") {
                    navigate("/error");
                }
                else if(error.response.code === 401 || error.response.code === 404){
                    navigate("/login");
                }
            })
    }
}

export default function useGetUserPosts() {
    const privatePosts = usePostStore(state => state.privatePosts);
    const setPrivatePosts = usePostStore(state => state.setPrivatePosts);
    const token = useTokenStore(state => state.token);
    const navigate = useNavigate();

    return () => getUserPost(token, privatePosts, setPrivatePosts, navigate);
}