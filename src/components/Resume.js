import React, { Component } from "react";
import { UCFLogo, SSCLogo } from "./MediaLogos"
import { Grid } from "@material-ui/core";
import MaterialUIProgressBar from "./materialUI"
import Author from "../assets/author_details.json"
const Resume = () => {
    return (
        <div className="resume-background">
            <div className="resume">
                <div className="flex-container">
                    <h3 className="resume-header">Education</h3>
                    <div className="cols">
                        <div className="right-side">
                            <div className="resume-mini-header">
                                <p>University of Central Florida</p>
                                <img src={UCFLogo} alt="UCF Logo" className="circle"/>
                            </div>
                            <div className="resume-description" style={{marginBottom: "-30px"}}>
                                <p className="left-info">Bachelor of Computer Science</p>
                                <p className="right-info"><i>Aug 2017 - Dec 2020</i></p>
                            </div>
                            <div className="resume-description">
                                <p className="left-info">Master of Computer Science</p>
                                <p className="right-info"><i>Jan 2021 - May 2022</i></p>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="resume-mini-header">
                                <p>Seminole State College</p>
                                <img src={SSCLogo} alt="SSC Logo" />
                            </div>
                            <div className="resume-description">
                                <p className="left-info">Associate of Arts (via dual-enrollment)</p>
                                <p className="right-info"><i>Aug 2015 - May 2017</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume panels">
                <div className="flex-container">
                    <h3 className="resume-header">Work Experience</h3>
                    <div className="cols">
                        <div className="right-side">
                            <div className="resume-mini-header">
                                <p>University of Central Florida</p>
                                <img src={UCFLogo} alt="UCF Logo" />
                            </div>
                            <div className="resume-description">
                                <p className="left-info">Research Assistant</p>
                                <p className="right-info"><i>May 2019 - Present</i></p>
                            </div>
                            <p className="explanation resume-description">
                                I have modified the LLVM and Clang infrastructures and a source code transformer to support a customized, side-channel free architecture. Accomplished this by adding a new LLVM IR opcode that produces extra assembly code used by the side-channel free architecture, modifying Clang to emit that opcode based on the source code attributes, and customizing a Java-based source code transformer to convert specific statements into a compatible format that doesn’t induce new side-channels. <br /> <br />
                                I am currently working on modularizing the packet processing language P4. My tasks include organizing and collecting data from P4 projects, analyzing it for patterns, and delivering suggestions for refining the scope of the project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume panels">
                <div className="flex-container">
                    <h3 className="resume-header">Skills I Wield</h3>
                    <div className="cols">
                        <div className="right-side">
                            <Complete />
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume panels">
                <div className="flex-container">
                    <h3 className="resume-header">Latest Project</h3>
                    <div className="cols">
                        <div className="right-side">
                            <div className="resume-mini-header">
                                <p>EndLess Learner (ELLE)</p>
                            </div>
                            <p className="explanation">
                                <a href="https://endlesslearner.com/home">EndLess Learner</a> is a platform design to help students learn a new language through interactive games in different platforms. It is also used for researches to determine what type of games and which platforms are most effective for learning. <br/> <br/>
                                This was my undergraduate capstone project where I worked with four other classmates to revamp the existing EndLess Learner product and create virtual reality games for the platform. I served as the project manager and as a backend developer for this project. My main responsibilities included communicating between the project sponsor, my teammates, and other ELLE groups to ensure we were building a product that the sponsor desired and to implement a backend that was universal for all platforms.
                            </p>
                            <div className="resume-mini-header">
                                <p>Personal Website</p>
                            </div>
                            <p className="explanation">
                                Right from high school I have created websites using vanilla HTML and CSS and sometimes with JavaScript. Though that helped me attain a strong fundamental knowledge on web development, it started to become tedious after a point. Then in college I heard that there are libraries that make it easier to build user interfaces, so I decided to pickup on a library; and you are seeing the product of that decision! <br /> <br />
                                I made this website with a React-based framework called Gatsby to ease my way into the world of React, and it helped me learn how to abstract specific parts into components and how to integrate prebuilt components within my own website
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume panels">
                <div className="flex-container">
                    <h3 className="resume-header">Current Courses<br/>
                    <p style={{fontSize: '30px', margin: '0px', marginTop: '2px', marginBottom: '2px'}}>(Spring 2021)</p></h3>
                    <div className="cols">
                        <div className="right-side">
                            <div className="resume-mini-header">
                                <p style={{fontWeight: 300}}>High Performance Computing and Programming</p>
                            </div>
                            <div className="resume-mini-header">
                                <p style={{fontWeight: 300}}>Parallel and Distributed Database Systems</p>
                            </div>
                            <div className="resume-mini-header">
                                <p style={{fontWeight: 300}}>Malware Software Vulnerability</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;


class Complete extends Component {
    render() {
        return (
            <>
            {
                Object.keys(Author.skills).map((data, key) => {
                    return (
                        <Grid key={key} spacing={0} container style={{alignItems: 'center', marginBottom: '-10px', padding: '0'}}>
                            <Grid xs item style={{maxWidth: 'max-content'}}>
                                <p style={{fontFamily: 'Share Tech Mono', minWidth: '110px', textAlign: 'right'}}>{data}</p>
                            </Grid>
                            <Grid xs item>
                                <MaterialUIProgressBar variant="determinate" value={Author.skills[data]}/>
                            </Grid>
                        </Grid>
                    )
                })
            }
            </>
        )
        
    }
}