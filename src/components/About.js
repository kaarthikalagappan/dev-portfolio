import React from "react"

const About = () => {
    return (
        <div class="about">
            <div class="description">
                <h3 class="mini-header">Who I am</h3>
                <p>
                    I'm a senior at the University of Central Florida where I'm pursuing my bachelors in Computer Science. 
                    I'm currently working as an undergraduate researcher with <a href="https://paulgazzillo.com/" target="_blank">Dr. Paul Gazzillo</a> on a side-channel related security project and also serving as the project manager for a course project. <br />
                </p>
                <p>
                    My primary interests include backend development, project management and development, and programming languages. Apart from that, I enjoy photography, bike riding, playing dungeons and dragons, and just learning new tools, in fact I built this website as a way to learn React! 
                </p>
            </div>
            <div class="description">
                <h3 class="mini-header">How to get in touch</h3>
                <div style={{display: "inline-block"}}>
                    <p>
                        Kaarthik A. Alagappan <br/>
                        Sanford, Florida <br/>
                        <a href="tel:+13866281649">386-628-1649</a> <br/>
                        <a href="mailto:kaarthik.alagappan@gmail.com">kaarthik.alagappan@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;