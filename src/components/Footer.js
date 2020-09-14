import React from 'react'
import Author from "../assets/author_details.json"
const Footer = () => {
    return (
        <div className="Footer">
            <p>
                <a href={"https://www.linkedin.com/in/"+Author.social_handles.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> || <a href={"https://github.com/"+Author.social_handles.github} target="_blank" rel="noreferrer">Github</a> || <a href={"mailto:"+Author.email} target="_blank" rel="noreferrer">Email</a>
            </p>
        </div>
    );
}

export default Footer;