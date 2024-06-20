import MainToolBar from "../Components/MainToolBar";
import BlogComponent from "../Components/BlogComponent";
import {useParams} from "react-router-dom";
import useGetPostById from "../Hooks/useGetPostById";
import PostDetails from "../Components/PostDetails";
import React, {useEffect, useState} from "react";
import {PostWithUser} from "../DataType/Post";
import BlogPostDetails from "../Components/BlogPostDetails";
import {useTokenStore} from "../Store/TokenStore";

export default function BlogPostPage() {
    const {id} = useParams();
    const backendUp = useTokenStore((state) => state.backendUp);
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
                { (element === undefined || !backendUp) ? <h1 className="MainError">Error</h1> : <BlogPostDetails element={element}/>}
            </div>
        </div>
    );
}