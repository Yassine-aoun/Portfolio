import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
    return ( <
        motion.div className = "about"
        id = "about"
        initial = {
            { y: -100 }
        } // Start position above the normal position
        animate = {
            { y: 0 }
        } // End position at normal position
        transition = {
            { type: "spring", stiffness: 300, damping: 20 }
        } // Spring animation for a "jumping" effect
        >
        <
        div className = "about-content" >
        <
        h1 > Hi there👋 < /h1>{" "} <
        p >
        I 'm <b>Yassine Aoun</b>, a passionate Software Engineer who loves
        turning ideas into reality.💡💻 < br / >
        From sleek UIs🎨 to powerful backends🔧, I’ m all about creating impact.✨ < br / >
        Passionate about tech, always learning, and ready
        for new challenges. { " " } <
        br / >
        Let’ s make something awesome!🚀🤝 < br / >
        <
        div className = "note" >
        Oh, and by the way, this site will keep evolving because I’ m constantly learning and cooking up new projects!🌱🔧
        <
        /div>{" "} < /
        p > { " " } <
        /div>{" "} < /
        motion.div >
    );
};

export default About;