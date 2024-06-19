import {PostWithUser} from "../DataType/Post";
import {Link} from "react-router-dom";

export default function PostListElement({post}: { post: PostWithUser }) {

    const content = post.content;
    const contentWithBreaks = content.split("\n")


    return (
        <Link to={`/admin/posts/${post.postId}`} style={{height: "fit-content", textDecoration: "none"}}>
            <div className="ListElement">
                <div className="TopBar">
                    <div>{post.title}</div>
                    <div>{(post as PostWithUser).username}</div>
                </div>
                <div style={{fontStyle: "italic"}}>{post.creationDate.toDateString()}</div>
                <div className="ListElementContent">{
                    contentWithBreaks.map((line, index) => {
                        return <div key={index}>{line}</div>
                    })
                }</div>
            </div>
        </Link>
    );
}
