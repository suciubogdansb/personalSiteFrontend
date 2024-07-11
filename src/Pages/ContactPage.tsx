import MainToolBar from "../Components/MainToolBar";
import ContactForm from "../Components/ContactForm";
import FooterComponent from "../Components/FooterComponent";
import React from "react";
import Chatbot from "../Components/Chatbot";
import {useTokenStore} from "../Store/TokenStore";

export default function ContactPage() {
    const backendUp = useTokenStore((state) => state.backendUp);

    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                <ContactForm/>
            </div>
            <FooterComponent/>
            {backendUp && <Chatbot/>}
        </div>
    );
}