import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
    const visitInstagram = () => {
        window.location = "https://instagram.com/iamrahul.tripathi";
    };
    return ( <
        div className = "aboutSection" >
        <
        div > < /div> <
        div className = "aboutSectionGradient" > < /div> <
        div className = "aboutSectionContainer" >
        <
        Typography component = "h1" > About Us < /Typography>

        <
        div >
        <
        div >
        <
        Avatar style = {
            { width: "10vmax", height: "10vmax", margin: "2vmax 0" }
        }
        src = "https://res.cloudinary.com/dr5ec1t9d/image/upload/c_crop,g_south,h_1600,w_900,x_0,y_861/v1669970202/ERA/DP_zmffse.jpg"
        alt = "Founder" /
        >
        <
        Typography > ERA < /Typography> <
        Button onClick = { visitInstagram }
        color = "primary" >
        Visit Instagram <
        /Button> <
        span >
        This is a sample wesbite made by Esha, Arva, Rahul. <
        /span> < /
        div > <
        div className = "aboutSectionContainer2" >
        <
        Typography component = "h2" > Our Brands < /Typography> <
        a href = "https://instagram.com/arva_13"
        target = "blank" >
        <
        YouTubeIcon className = "youtubeSvgIcon" / >
        <
        /a>

        <
        a href = "https://instagram.com/esha_shelar"
        target = "blank" >
        <
        InstagramIcon className = "instagramSvgIcon" / >
        <
        /a> < /
        div > <
        /div> < /
        div > <
        /div>
    );
};

export default About;