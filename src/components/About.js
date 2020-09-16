import React from "react"
import Author from "../assets/author_details.json"

const About = () => {
    return (
        <div className="about">
            <div className="description">
                <h3 className="mini-header">Who I am</h3>
                <p>
                    I'm a senior at the University of Central Florida where I'm pursuing my bachelors in Computer Science. 
                    I'm currently working as an undergraduate researcher with <a href="https://paulgazzillo.com/" target="_blank" rel="noreferrer">Dr. Paul Gazzillo</a> on a side-channel related security project and also serving as the project manager for a course project. <br />
                </p>
                <p>
                    My primary interests include backend development, project management and development, and programming languages. Apart from that, I enjoy photography, bike riding, playing dungeons and dragons, and learning new tools, in fact I built this website as a way to learn React! 
                </p>
            </div>
            <div className="description">
                <h3 className="mini-header">How to get in touch</h3>
                <div style={{display: "inline-block"}}>
                    <p>
                        {Author.first_name} {Author.middle_name} {Author.last_name} <br/>
                        {Author.location}<br/>
                        <a href="mailto:kaarthik.alagappan@gmail.com">kaarthik.alagappan@gmail.com</a> <br />
                        <a href={"https://www.linkedin.com/in/"+Author.social_handles.linkedin} aria-label="LinkedIn Link" target="_blank" rel="noreferrer">LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;