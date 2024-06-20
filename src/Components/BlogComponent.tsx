import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import OrderDropdown from "./OrderDropdown";
import FilterInput from "./FilterInput";
import {PostWithUser} from "../DataType/Post";
import useGetFilterPosts from "../Hooks/useGetFilterPosts";
import MainPostList from "./MainPostList";

export default function BlogComponent() {
    const [selected, setSelected] = useState("Default");
    const [filter, setFilter] = useState("");

    const [posts, setPosts] = useState<PostWithUser[]>([]);
    const [hasLoadedPosts, setHasLoadedPosts] = useState(false);

    const getPosts = useGetFilterPosts(setPosts, filter, selected);

    useEffect(() => {
        if (!hasLoadedPosts) {
            getPosts();
            setHasLoadedPosts(true);
        }
    }, [hasLoadedPosts, getPosts]);

    return (
        <div style={{width: '100%'}}>
            <div className="OptionHolder">
                <OrderDropdown selected={selected} setSelected={setSelected}/>
                <FilterInput setFilter={setFilter}/>
                <Button className="FilterButton" onClick={(e) => setHasLoadedPosts(false)}>Filter</Button>
            </div>
            <MainPostList posts={posts}/>
        </div>
    );
}