import MainToolBar from "../Components/MainToolBar";
import BlogComponent from "../Components/BlogComponent";
import {useParams} from "react-router-dom";
import useGetPostById from "../Hooks/useGetPostById";
import PostDetails from "../Components/PostDetails";
import React, {useEffect, useState} from "react";
import {PostWithUser} from "../DataType/Post";

export default function BlogPostPage() {
    const {id} = useParams();
    const [element, setElement] = useState<PostWithUser | undefined>(undefined);

    const post = useGetPostById(id, setElement);
    console.log(post);

    useEffect(() => {
        if (element === undefined)
            post();
    }, [element]);

    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                { element === undefined ? <h1>ERROR</h1> : <PostDetails element={element}/>}
            </div>
        </div>
    );
}