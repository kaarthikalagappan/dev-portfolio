import React from "react"
import Author from "../assets/author_details.json"

const About = () => {
    return (
        <div className="about">
            <div className="description">
                <h3 className="mini-header">Who I am</h3>
                <p>
                    I'm a grad student at the University of Central Florida where I'm pursuing my masters in Computer Science with a focus on databases and high performance computing. 
                    I'm currently working as a research assistant with <a href="https://paulgazzillo.com/" target="_blank" rel="noreferrer">Dr. Paul Gazzillo</a> on making the network processing language P4 modular. <br />
                </p>
                <p>
                    My primary interests are backend and project development, project management, and programming languages. Apart from that, I enjoy photography, bike riding, playing Dungeons & Dragons, and learning new tools.
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