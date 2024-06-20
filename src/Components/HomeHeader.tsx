import me from "../Media/52839106250_6fa0426841_k.png";

export default function HomeHeader() {
    return (
        <div className="HomeHeader">
            <div className="HomeHeaderOverlay">
                <img className="HomeHeaderImage" src={me} alt="me"/>
            </div>
            <div className="HomeHeaderContent">
                <h1 className="HomeHeaderTitle">Hi, I'm Bogdan</h1>
                <p className="HomeHeaderSubtitle">Welcome to my personal website!</p>
            </div>
        </div>
    )
        ;
}