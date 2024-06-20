import MainToolBar from "../Components/MainToolBar";
import ContactForm from "../Components/ContactForm";
import FooterComponent from "../Components/FooterComponent";
import React from "react";

export default function ContactPage() {
    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                <ContactForm/>
            </div>
            <FooterComponent/>
        </div>
    );
}