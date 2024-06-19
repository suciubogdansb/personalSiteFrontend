import {PostWithUser} from "../DataType/Post";
import {Button} from "react-bootstrap";
import {useTokenStore} from "../Store/TokenStore";
import {jwtDecode} from "jwt-decode";
import {TokenStructure} from "../DataType/TokenStructure";
import "../Style/DetailsPage.css"
import useDeletePost from "../Hooks/useDeletePost";
import {Link} from "react-router-dom";

export default function DetailPageControls({element}: { element: PostWithUser | undefined }) {
    const token = useTokenStore((state) => state.token);
    const decodedToken = jwtDecode(token);
    const tokenStructure = decodedToken as TokenStructure
    const userId = tokenStructure.userId;

    const handleDelete = useDeletePost(element?.postId || "")

    return (
        element ? (
            <div className="DetailsControls">
                <Button className="addButton" style={{borderColor: "red", color: "red"}}
                        onClick={handleDelete}>Delete</Button>
                {element.userId === userId && (
                    <Link to={`/admin/posts/update/${element.postId}`} style={{height: "fit-content"}}>
                        <Button className="addButton">Edit</Button>
                    </Link>
                )}
            </div>
        ) : (
            <></>
        )
    )

}