import React from "react"
import { Avatar } from '@material-ui/core';
import { FaGithubSquare, FaLinkedin,  FaEnvelopeSquare} from 'react-icons/fa';
import { ProfilePic } from "./MediaLogos"
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Author from "../assets/author_details.json"

const useStyles = makeStyles( () => ({
    large: {
      width: '10em',
      height: '10em',
    },
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <div className="home">
            <div className="contain">
                <div className="avatar">
                    <Avatar alt="Remy Sharp" src={ProfilePic} className={classes.large} style={{border: '6px solid #1d1d1d'}}/>
                </div>
                <div>
                    <h1 className="title">Hello! I'm {Author.first_name}.</h1>
                    <div className="social-icons">
                        <a href={"https://github.com/"+Author.social_handles.github} aria-label="GitHub Link" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                        <a href={"https://www.linkedin.com/in/"+Author.social_handles.linkedin} aria-label="LinkedIn Link" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href={"mailto:"+Author.email} aria-label="Email Link" target="_blank" rel="noreferrer"><FaEnvelopeSquare /></a>
                        <div>
                            <a href="./Kaarthik_Resume.pdf">
                                <Button variant="contained" title="Download Resume" startIcon={<GetAppIcon />}>
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;