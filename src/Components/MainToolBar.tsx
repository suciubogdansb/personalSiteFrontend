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
                    <Link to="/aboutme">
                        <Button className="MainToolButton">About Me</Button>
                    </Link>
                    <Link to="/cv">
                        <Button className="MainToolButton">CV</Button>
                    </Link>
                    <Link to="/blog">
                        <Button className="MainToolButton">Blog</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}