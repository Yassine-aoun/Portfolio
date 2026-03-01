import React from "react";
import "./Projects.css";
import pic1 from "../../assets/p1.png";
import pic2 from "../../assets/p2.png";
import pic3 from "../../assets/pic3pr.png"
const Projects = () => {
    return ( <
        >
        <
        div className = "continer project"
        id = "projects" >
        <
        h2 className = "col-12 mt-3 mb-1 text-center text-uppercase" >
        Projects <
        /h2> <
        hr / >
        <
        p className = "pb-3 text-center" >
        Here are two projects I 've worked on. Want the details? Let’s chat and I’ll tell you all the behind-the-scenes!🚀<br></br>
        This section will be updated as soon as I finish my ongoing projects, so stay tuned
        for more cool stuff!🔧
        <
        /p>

        { /* card design */ } <
        div className = "row"
        id = "ads" >
        <
        div className = "col-md-4" >
        <
        div className = "card rounded" >
        <
        div className = "card-image" >
        <
        img src = { pic1 }
        alt = "project1" /
        >
        <
        /div> <
        div className = "card-image-overly m-auto mt-3" >
        <
        span className = "card-detail-badge" > C++ < /span> <
        span className = "card-detail-badge" > wxWidgets < /span> < /
        div > <
        div className = "card-body text-center" >
        <
        div className = "ad-title m-auto" >
        <
        h5 className = "text-uppercase" >
        Battleship Game <
        /h5> <
        p >
        Developed a Battleship Game using C++ and wxWidgets, featuring a graphical user interface and game logic for two players. <
        /p> < /
        div > <
        /div> < /
        div > <
        /div> <
        div className = "col-md-4" >
        <
        div className = "card rounded" >
        <
        div className = "card-image" >
        <
        img src = { pic2 }
        alt = "project2" /
        >
        <
        /div> <
        div className = "card-image-overly m-auto mt-3" >
        <
        span className = "card-detail-badge" > React Native < /span> <
        span className = "card-detail-badge" > ANDROID < /span> <
        span className = "card-detail-badge" > QGIS < /span> <
        span className = "card-detail-badge" > STM32 < /span> < /
        div > <
        div className = "card-body text-center" >
        <
        div className = "ad-title m-auto" >
        <
        h5 className = "text-uppercase" > Automated Verbal Aggression Detection & Patrol Alert System < /h5> <
        p >
        Developed a system to detect and analyze verbal aggression and implemented a signaling mechanism to notify patrols in real - time upon detection of aggressive behavior. <
        /p> < /
        div >

        <
        /div> < /
        div > <
        /div> <
        div className = "col-md-4" >
        <
        div className = "card rounded" >
        <
        div className = "card-image" >
        <
        img src = { pic3 }
        alt = "project3" /
        >
        <
        /div> <
        div className = "card-image-overly m-auto mt-3" >
        <
        span className = "card-detail-badge" > Python < /span> <
        span className = "card-detail-badge" > FastAPI < /span> <
        span className = "card-detail-badge" > svelte < /span> <
        span className = "card-detail-badge" > Docker < /span> <
        span className = "card-detail-badge" > PostgreSQL < /span>

        <
        /div> <
        div className = "card-body text-center" >
        <
        div className = "ad-title m-auto" >
        <
        h5 className = "text-uppercase" >
        NSWH Calculator Project <
        /h5> <
        p >
        Built a web app to calculate work hours and overtime pay with user login and PDF. <
        /p> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /div> < / >
    );
};

export default Projects;