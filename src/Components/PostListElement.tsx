import {Post, PostWithUser} from "../DataType/Post";
import {type} from "node:os";

export default function PostListElement({post}:
                                            { post: Post }) {

    //check if post is PostWithUser
    const isPostWithUser = typeof (post as PostWithUser).username !== "undefined";
        return (
            <div className="ListElement">
                <div className="TopBar">
                    <div>{post.title}</div>
                    {isPostWithUser && <div>{(post as PostWithUser).username}</div>}
                </div>
                <div className="ListElementContent">
                    {post.content}
                </div>
            </div>
        )
    }