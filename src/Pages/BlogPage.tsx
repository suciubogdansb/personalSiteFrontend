import MainToolBar from "../Components/MainToolBar";
import "../Style/MainPage.css";
import BlogComponent from "../Components/BlogComponent";
import {useTokenStore} from "../Store/TokenStore";
export default function BlogPage() {
    const backendUp = useTokenStore((state) => state.backendUp)

    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                {backendUp ? <BlogComponent/> : <h1 className="MainError">Backend is down</h1>}
            </div>
        </div>
    );
}