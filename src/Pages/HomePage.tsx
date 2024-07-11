import MainToolBar from "../Components/MainToolBar";
import "../Style/HomePage.css";
import HomeHeader from "../Components/HomeHeader";
import AboutMeSegment from "../Components/AboutMeSegment";
import AideSegment from "../Components/AideSegment";
import CompetitionSegment from "../Components/CompetitionSegment";
import HobbiesSegment from "../Components/HobbiesSegment";
import FooterComponent from "../Components/FooterComponent";
import React from "react";
import Chatbot from "../Components/Chatbot";
import {useTokenStore} from "../Store/TokenStore";
export default function HomePage() {
    const backendUp =useTokenStore((state) => state.backendUp);
    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                <HomeHeader></HomeHeader>
                <AboutMeSegment/>
                <CompetitionSegment/>
                <AideSegment/>
                <HobbiesSegment></HobbiesSegment>
            </div>
            <FooterComponent/>
            {backendUp && <Chatbot/>}
        </div>
    );
}