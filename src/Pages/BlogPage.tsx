import MainToolBar from "../Components/MainToolBar";
import "../Style/MainPage.css";
import BlogComponent from "../Components/BlogComponent";
export default function BlogPage() {
    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                <BlogComponent/>
            </div>
        </div>
    );
}