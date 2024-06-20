import MainToolBar from "../Components/MainToolBar";
import "../Style/HomePage.css";
import HomeHeader from "../Components/HomeHeader";
import AboutMeSegment from "../Components/AboutMeSegment";
import AideSegment from "../Components/AideSegment";
import CompetitionSegment from "../Components/CompetitionSegment";
import HobbiesSegment from "../Components/HobbiesSegment";
import FooterComponent from "../Components/FooterComponent";
import React from "react";
export default function HomePage() {
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
        </div>
    );
}