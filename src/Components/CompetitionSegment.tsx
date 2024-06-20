import teamPhoto from "../Media/WhatsApp Image 2024-06-19 at 16.09.09-3.jpeg";

export default function CompetitionSegment() {
    return (
        <div className="CompetitionSegment">
            <div className="CompetitionSegmentContent">
                I have been a competitor in different fields for as long as I can remember. I have always been
                looking for a new challenge, a new way to prove myself, a new person to both admire for their
                capabilities, and to make me push myself to a different level. I competed in many competitions,
                most individual, but most challenging and fun are the team ones. Throughout the years, I have
                worked on my teamwork skills, put to test by different projects, hackathons, or coding contests,
                where one couldn't, but many could succeed.
            </div>
            <img src={teamPhoto} alt="teamPhoto"/>
        </div>
    )
}