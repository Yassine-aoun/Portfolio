import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./workExp.css";
import fis from "../../assets/fis.png";
import cognira from "../../assets/cognira.jpeg";
import onetech from "../../assets/onetech.png";
import bna from "../../assets/bna.png";
import premiere from "../../assets/pr.png";

const WorkExp = () => {
        return ( <
                >
                <
                div className = "work"
                id = "work" >
                <
                div className = "container work-exp" >
                <
                h2 className = "col-12 mt-3 mb-1 text-center text-uppercase" >
                Experience <
                /h2> <
                hr / >
                <
                VerticalTimeline lineColor = "#1e1e2c" >
                <
                VerticalTimelineElement className = "vertical-timeline-element--work"
                contentStyle = {
                    { background: "white", color: "#1e1e2c" }
                }
                contentArrowStyle = {
                    {
                        borderRight: "7px solid  white",
                    }
                }
                date = "Aug. 2024 - present"
                dateClassName = "white-date"
                iconStyle = {
                    {
                        background: "#1e1e2c",
                        color: "#fff",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                }
                icon = { < img src = { fis }
                    alt = "fis"
                    style = {
                        { width: "40px", height: "40px", borderRadius: "50%" }
                    }
                    />} > <
                    h3 className = "vertical-timeline-element-title" >
                    Software Engineer <
                    /h3> <
                    h4 className = "vertical-timeline-element-subtitle" >
                    FIS Global <
                    /h4> <
                    h6 >
                    FIS is a global leader in financial technology.I work on UBIX,
                    a real - time back - office system
                    for cleared derivatives supporting sell - side and buy - side operations. <
                    /h6> <
                    ul >
                    <
                    li > Enhance UBIX features and fix issues to keep the platform stable and high - performing < /li> <
                    li > Support clients and resolve critical incidents(Category 1) within a 6 - hour SLA < /li> <
                    li > Contribute to the migration from UBIX→ FCDUBIX using Spring Boot,
                    Angular,
                    Oracle < /li> <
                    li > Build reusable Angular components and high - performance REST APIs < /li> <
                    li > Develop automated workflows,
                    including a real - time autopilot dashboard < /li> <
                    li > Ensure quality through unit tests(85 % +coverage) and BDD tests(Cucumber) < /li> <
                    li > Collaborate with architects,
                    release teams,
                    and developers across Agile ceremonies < /li> <
                    li > Document features,
                    APIs,
                    and processes
                    for cross - team alignment < /li> <
                    li > Present weekly demos and progress updates to stakeholders < /li> < /
                    ul > <
                    b >
                    Technologies: Java,
                    Spring Boot,
                    Angular,
                    TypeScript,
                    C / C++,
                    Python,
                    Oracle Database,
                    PLSQL,
                    Nx,
                    Git,
                    Artifactory <
                    /b> < /
                    VerticalTimelineElement > <
                    VerticalTimelineElement
                    className = "vertical-timeline-element--work"
                    contentStyle = {
                        { background: "white", color: "#1e1e2c" }
                    }
                    contentArrowStyle = {
                        {
                            borderRight: "7px solid  white",
                        }
                    }
                    date = "Jan. 2024 - Jul. 2024"
                    dateClassName = "white-date"
                    iconStyle = {
                        {
                            background: "#1e1e2c",
                            color: "#fff",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }
                    }
                    icon = { < img src = { onetech }
                        alt = "OneTech"
                        style = {
                            { width: "40px", height: "40px", borderRadius: "50%" }
                        }
                        />} > <
                        h3 className = "vertical-timeline-element-title" >
                        Software Engineer <
                        /h3> <
                        h4 className = "vertical-timeline-element-subtitle" >
                        OneTechBS,
                        Tunisia <
                        /h4> <
                        h6 >
                        At OneTechBS,
                        I worked on integrating the Backbase digital banking platform
                        for banks across Africa,
                        helping them modernize customer experiences and connect legacy systems to new digital channels. <
                        /h6> <
                        ul >
                        <
                        li > Built a scalable integration layer between core banking systems and Backbase digital services < /li> <
                        li > Implemented secure OAuth2 / Keycloak authentication across multiple user roles < /li> <
                        li > Containerized services with Docker and deployed them on Kubernetes,
                        achieving 99.9 % availability < /li> <
                        li > Translated banking requirements into technical solutions with product owners and business analysts < /li> <
                        li > Supported CI / CD pipelines with GitHub Actions to automate builds,
                        tests,
                        and deployments < /li> < /
                        ul > <
                        b >
                        Technologies: Java,
                        Spring Boot,
                        Keycloak,
                        Docker,
                        Kubernetes,
                        MySQL,
                        Microsoft Azure,
                        GitHub Actions,
                        RESTful APIs,
                        OAuth2,
                        Backbase Integration <
                        /b> < /
                        VerticalTimelineElement > <
                        VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {
                            { background: "white", color: "#1e1e2c" }
                        }
                        contentArrowStyle = {
                            {
                                borderRight: "7px solid  white",
                            }
                        }
                        date = "Feb. 2023 - Jun. 2023"
                        dateClassName = "white-date"
                        iconStyle = {
                            {
                                background: "#1e1e2c", // circle background color
                                color: "#fff", // text color if needed
                                width: "50px", // circle size
                                height: "50px", // circle size
                                borderRadius: "50%", // makes the icon a circle
                                display: "flex", // allows image to align properly
                                justifyContent: "center", // centers the image horizontally
                                alignItems: "center", // centers the image vertically
                            }
                        }
                        icon = { < img src = { cognira }
                            alt = "Cognira"
                            style = {
                                { width: "40px", height: "40px", borderRadius: "50%" }
                            }
                            />} > <
                            h3 className = "vertical-timeline-element-title" >
                            Software Engineer Intern <
                            /h3> <
                            h4 className = "vertical-timeline-element-subtitle" >
                            Cognira,
                            Tunisia <
                            /h4> <
                            h6 >
                            At Cognira,
                            I worked on AI - driven retail optimization tools,
                            focusing on data quality,
                            validation,
                            and system reliability
                            for large - scale analytics pipelines. <
                            /h6> <
                            ul >
                            <
                            li > Designed and developed a generic rule - based input validation framework integrated with Cognira 's metrics models</li> <
                            li > Reduced data validation errors by~30 % ,
                            improving data quality across multiple APIs < /li> <
                            li > Built a rule compiler that parses validation rules into ASTs
                            for more efficient execution < /li> <
                            li > Wrote acceptance and integration tests to ensure the framework 's robustness and correctness</li> <
                            li > Gained hands - on experience with distributed systems and containerized environments < /li> < /
                            ul > <
                            b >
                            Technologies: Scala,
                            Spring Boot,
                            Cassandra,
                            Docker,
                            Unit Testing,
                            AST,
                            Validation Framework <
                            /b> < /
                            VerticalTimelineElement > <
                            VerticalTimelineElement
                            className = "vertical-timeline-element--work"
                            contentStyle = {
                                { background: "white", color: "#1e1e2c" }
                            }
                            contentArrowStyle = {
                                {
                                    borderRight: "7px solid  white",
                                }
                            }
                            date = "Jul. 2022 - Sep. 2022"
                            dateClassName = "white-date"
                            iconStyle = {
                                {
                                    background: "#1e1e2c",
                                    color: "#fff",
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }
                            }
                            icon = { < img src = { bna }
                                alt = "BNA"
                                style = {
                                    { width: "40px", height: "40px", borderRadius: "50%" }
                                }
                                />} > <
                                h3 className = "vertical-timeline-element-title" >
                                Software Engineer Intern <
                                /h3> <
                                h4 className = "vertical-timeline-element-subtitle" >
                                BNA - Banque Nationale Agricole,
                                Tunisia <
                                /h4> <
                                h6 >
                                Designed and developed a secure RESTful payment API
                                for bill payment services. <
                                /h6> <
                                ul >
                                <
                                li > Designed and developed a secure RESTful payment API
                                for bill payment services < /li> <
                                li > Ensured data integrity,
                                security,
                                and performance
                                for financial transactions < /li> <
                                li > Participated in code reviews,
                                testing,
                                and maintenance cycles to improve system reliability < /li> <
                                li > Worked in close collaboration with banking IT teams in a regulated environment < /li> < /
                                ul > <
                                b >
                                Technologies: Java,
                                REST APIs,
                                Spring Boot,
                                MySQL,
                                Security,
                                Financial Systems <
                                /b> < /
                                VerticalTimelineElement > <
                                VerticalTimelineElement
                                className = "vertical-timeline-element--work"
                                contentStyle = {
                                    { background: "white", color: "#1e1e2c" }
                                }
                                contentArrowStyle = {
                                    {
                                        borderRight: "7px solid  white",
                                    }
                                }
                                date = "Jul. 2021 - Aug. 2021"
                                dateClassName = "white-date"
                                iconStyle = {
                                    {
                                        background: "#1e1e2c",
                                        color: "#fff",
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }
                                }
                                icon = { < img src = { premiere }
                                    alt = "Première Consulting"
                                    style = {
                                        { width: "40px", height: "40px", borderRadius: "50%" }
                                    }
                                    />} > <
                                    h3 className = "vertical-timeline-element-title" >
                                    Software Engineer Intern <
                                    /h3> <
                                    h4 className = "vertical-timeline-element-subtitle" >
                                    Première Consulting,
                                    Tunisia <
                                    /h4> <
                                    h6 >
                                    Première Consulting is a technology and business consulting firm delivering web - based solutions
                                    for clients across multiple industries. <
                                    /h6> <
                                    ul >
                                    <
                                    li > Developed front - end web interfaces using JavaScript and Bootstrap to improve usability and client - facing functionality < /li> <
                                    li > Integrated front - end components with existing backend systems built with PHP,
                                    ensuring smooth data flow and reliable application behavior < /li> < /
                                    ul > <
                                    b >
                                    Technologies: JavaScript,
                                    Bootstrap,
                                    PHP,
                                    HTML / CSS,
                                    Web Development <
                                    /b> < /
                                    VerticalTimelineElement > <
                                    /VerticalTimeline> < /
                                    div > <
                                    /div> < / >
                                );
                            };

                            export default WorkExp;