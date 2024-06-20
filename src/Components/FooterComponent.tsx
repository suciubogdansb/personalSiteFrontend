import React from 'react';
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';
import {MdEmail, MdLocationOn, MdPhone, MdHome} from 'react-icons/md';
import "../Style/FooterComponent.css";

export default function FooterComponent() {
    return (
        <footer className="Footer">
            <div className="FooterContact">
                <div className="IconContainer">
                    <a href="https://www.linkedin.com/in/bogdan-suciu-9b3b99261/" className="Icon"
                       aria-label="LinkedIn">
                        <FaLinkedin/>
                    </a>
                    <a href="https://github.com/suciubogdansb" className="Icon" aria-label="GitHub">
                        <FaGithub/>
                    </a>
                    <a href="https://www.instagram.com/suciubogdansb/" className="Icon" aria-label="Instagram">
                        <FaInstagram/>
                    </a>
                    <a href="mailto:bogdysuciu0@gmail.com" className="Icon" aria-label="Email">
                        <MdEmail/>
                    </a>
                </div>
                <div className="PhoneContainer">
                    <a href="tel:+40753755285" className="PhoneLink">
                        <MdPhone className="PhoneIcon"/>
                        <span>+40 753 755 285</span>
                    </a>
                </div>
            </div>
            <div className="Addresses">
                <a href="https://www.google.com/maps/place/Bloc+17,+Strada+Șesului+17,+Cluj-Napoca+400535/@46.7617282,23.5573881,17z/data=!3m1!4b1!4m6!3m5!1s0x47490e617dc7650d:0x3a2a3f302081481d!8m2!3d46.7617246!4d23.559963!16s%2Fg%2F12lvcydm0?entry=ttu" className="AddressContainer">
                    <MdLocationOn className="LocationIcon"/>
                    <span>Sesului Street 17, Cluj-Napoca, Cluj, Romania</span>
                </a>
                <a href="https://www.google.com/maps/place//@47.6021983,23.5399081,18z/data=!3m1!4b1!4m9!1m8!3m7!1s0x4737dece3d959d73:0x4ca7aa4b8ebfe306!2zQ8SDdMSDbGluYQ!3b1!8m2!3d47.603562!4d23.5454654!16s%2Fg%2F120hnsxg?entry=ttu" className="AddressContainer">
                    <MdHome className="LocationIcon"/>
                    <span>Arinului Street 11, Catalina, Maramures, Romania</span>
                </a>
            </div>
        </footer>
    );
};
