import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, {useEffect} from "react";
import {Image} from "react-bootstrap";
import signature from "../Media/signature-2.png";
import "../Style/MainToolBar.css";

export default function MainToolBar() {

    return (
        <div className="MainToolBar">
            <div className="MainToolHolder">
                <div>
                    <Link to="/">
                        <Image className="MainToolImage" src={signature} alt="signature" fluid/>
                    </Link>
                </div>
                <div className="MainToolButtons">
                    <Link to="/">
                        <Button className="MainToolButton">About Me</Button>
                    </Link>
                    <a href="/~Suciu_Bogdan_CV.pdf" download>
                        <Button className="MainToolButton">CV</Button>
                    </a>
                    <Link to="/blog">
                        <Button className="MainToolButton">Blog</Button>
                    </Link>
                    <Link to="/contact">
                        <Button className="MainToolButton">Contact Me</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}