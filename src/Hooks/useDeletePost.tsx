import {usePostStore} from "../Store/PostStore";
import {deletePost} from "../Services/PostService";
import {useNavigate} from "react-router-dom";

export default function useDeletePost(
    postId: string
) {
    const removePost = usePostStore((state) => state.removePost);
    const navigate = useNavigate()
    const handlePromote = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        deletePost(postId).then((response) => {
            console.log("Post deleted");
            removePost(postId);
            navigate("/admin/posts")
        })
            .catch((error) => console.log(error));
    }

    return handlePromote;
}