import {PostWithUser} from "../DataType/Post";
import "../Style/BlodPostPage.css";
import {getImage} from "../Services/PostService";


export default function BlogPostDetails({element}: { element: PostWithUser }) {
    const contentWithBreaks = element.content.split("\n")

    return (
        <div className="BlogPostDetails">
            <h1 className="BlogPostDetailsTitle">{element.title}</h1>
            <div className="BlogPostDetailsBar">
                {element.filepath && <img className="BlogPostImage" src={getImage(element.postId, element.filepath)}
                                          alt={element.title}/>}
            </div>
            <div className="BlogPostCreationDeatails">
                <div className="Creator">by {element.username}</div>
                <div className="CreationTime">Posted on {element.creationDate.toLocaleDateString("en-GB", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}</div>
            </div>
            <div>{
                contentWithBreaks.map((line, index) => {
                    return <p className="ContentParagraph" key={index}>{line}</p>
                })
            }</div>
        </div>
    )
}