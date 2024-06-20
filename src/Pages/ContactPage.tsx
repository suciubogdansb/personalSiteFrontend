import MainToolBar from "../Components/MainToolBar";
import BlogComponent from "../Components/BlogComponent";
import ContactForm from "../Components/ContactForm";

export default function ContactPage() {
    return (
        <div>
            <MainToolBar/>
            <div className="MainPage">
                <ContactForm/>
            </div>
        </div>
    );
}