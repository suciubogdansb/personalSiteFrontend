import {PostWithUser} from "../DataType/Post";
import {Link} from "react-router-dom";
import {getImage} from "../Services/PostService";

export default function MainPostElement({post}: { post: PostWithUser }) {

    const content = post.content;
    const contentWithBreaks = content.split("\n")


    return (
        <Link to={`/blog/${post.postId}`} style={{height: "fit-content", textDecoration: "none", width: "100%"}}>
            <div className="MainListElement">
                {post.filepath &&
                    <div className="ImageContainer">
                        <img src={getImage(post.postId, post.filepath)} alt="Post Image" className="ImageMainPost"/>
                    </div>
                }
                <div className="SibeBar">
                    <div className="SideBarTitle">{post.title}</div>
                    <div className="SideBarBottom">
                        <div>{post.creationDate.toDateString()}</div>
                        <div>{post.username}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}