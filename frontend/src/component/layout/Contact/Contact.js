import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
    return ( <
        div className = "contactContainer" >
        <
        a className = "mailBtn"
        href = "mailto:eragrouptemp@gmail.com" >
        <
        Button > Click to contact us via email < /Button> < /
        a > <
        /div>
    );
};

export default Contact;