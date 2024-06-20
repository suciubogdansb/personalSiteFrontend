import aide from "../Media/52938514586_be46c62f0d_c.jpg";
import {Button} from "react-bootstrap";

export default function AideSegment() {
    return (
        <div className="AideSegment">
            <div className="AideSegmentOverlay">
                <img className="AideSegmentImage" src={aide} alt="Aide"/>
            </div>
            <div className="AideSegmentContent">
                <h1 className="AideSegmentTitle">Work Experience & AIDE</h1>
                <p className="AideSegmentSubtitle">
                    My work experience goes back to my high-school days when I first started working as a trainee at
                    AROBS Transilvania Software for the dpIT competition. Additionally, I have worked as a intern at
                    a local cosmetics company, where I was responsible for fixing and maintaining the company's
                    WordPress and PrestaShop websites, among other things.
                </p>
                <p className="AideSegmentSubtitle">
                    Since March of 2023, I have been working on the edTech startup AIDE as a Software Developer and a
                    founding member. Our focus is on creating a new learning experience and automating training in
                    high-regulation industries, by leveraging the latest technologies and AI advancements.
                    Our work has been recognized by multiple accelerators and competitions, being finalists in the 2023
                    edition of the LevelUp accelerator and winners of the "Best Business" award at that year's edition
                    of Innovation Labs.
                </p>
                <a href="/~Suciu_Bogdan_CV.pdf" download>
                    <Button className="AideSegmentButton">Get my CV</Button>
                </a>
            </div>
        </div>
    )
}