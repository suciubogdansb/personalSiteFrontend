import hobby1 from '../Media/hobby1.jpg';
import hobby2 from '../Media/WhatsApp Image 2024-06-19 at 16.09.08-4.jpg';
import hobby3 from '../Media/WhatsApp Image 2024-06-19 at 16.02.30-2.jpg';
import hobby4 from '../Media/WhatsApp Image 2024-06-19 at 16.09.09-5.jpg';

export default function HobbiesSegment() {
    return (
        <div className="HobbiesSegmentHolder">
            Hobbies
            <div className="HobbiesSegment">
                <div className="Hobby" id="hobby1">
                    <img src={hobby1} alt="hooby1"></img>
                    <p>
                        Amateur bass guitar player, self thought by playing tabs of Songsterr till I'd get it right
                    </p>
                </div>
                <div className="Hobby" id="hobby2">
                    <img src={hobby2} alt="hooby2"></img>
                    <p>
                        Physical activity is the one thing that keeps me sane: gym, hiking, running, boxing
                    </p>
                </div>
                <div className="Hobby" id="hobby3">
                    <img src={hobby3} alt="hooby3"></img>
                    <p>
                        Cooking is a gateway to the world, to different cultures
                    </p>
                </div>
                <div className="Hobby" id="hobby4">
                    <img src={hobby4} alt="hooby4"></img>
                    <p>
                        Living, seeing, experiencing; all better with a mate
                    </p>
                </div>
            </div>
        </div>
    )
}