import {PostWithUser} from "../DataType/Post";
import "../Style/DetailsPage.css";
import {getImage} from "../Services/PostService";


export default function PostDetails({element}: { element: PostWithUser | undefined }) {
    const contentWithBreaks = element?.content.split("\n")

    return (
        element !== undefined ? (
            <div className="DetailsContainer">
                <h1>{element.title}</h1>
                <div className="DetailsBar">
                    <div>{element.username}</div>
                    <div>{element.creationDate.toDateString()}</div>
                </div>
                <div>{
                    contentWithBreaks?.map((line, index) => {
                        return <p key={index}>{line}</p>
                    })
                }</div>

                {element.filepath && <img src={getImage(element.postId, element.filepath)} alt={element.title}/>}
            </div>
        ) : (
            <div className="Error" style={{fontSize: "2rem"}}>Post not found</div>
        )
    )
}