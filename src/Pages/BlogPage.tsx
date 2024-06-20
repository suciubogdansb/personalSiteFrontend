import MainToolBar from "../Components/MainToolBar";
import "../Style/MainPage.css";
import BlogComponent from "../Components/BlogComponent";
import {useTokenStore} from "../Store/TokenStore";
import BlogHeader from "../Components/BlogHeader";
import FooterComponent from "../Components/FooterComponent";
import React from "react";

export default function BlogPage() {
    const backendUp = useTokenStore((state) => state.backendUp)

    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                <div style={{width: '100%'}}>
                    <BlogHeader/>
                </div>
                {backendUp ? <BlogComponent/> : <h1 className="MainError">Server down</h1>}
            </div>
            <FooterComponent/>
        </div>
    );
}