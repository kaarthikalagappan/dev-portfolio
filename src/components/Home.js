import React from "react"
import { Avatar } from '@material-ui/core';
import { FaGithubSquare, FaLinkedin,  FaEnvelopeSquare} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr'
import AvatarImg from '../../static/Images/DSC_4041.jpg'
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles( () => ({
    root: {
      display: 'flex',
      color: '#2B2B2B',
      backgroundColor: 'white',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    large: {
      width: '9em',
      height: '9em',
    },
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <div class="home">
            <div class="contain">
                <div class="avatar">
                    <Avatar alt="Remy Sharp" src={AvatarImg} className={classes.large} style={{border: '6px solid #1d1d1d'}}/>
                </div>
                <div>
                    <h1 class="title">Hello! I'm Kaarthik.</h1>
                    <div class="social-icons">
                        <a href="https://github.com/kaarthikalagappan/" target="_blank"><FaGithubSquare /></a>
                        <a href="https://www.linkedin.com/in/kaarthik-alagappan/" target="_blank"><FaLinkedin /></a>
                        <a href="mailto:kaarthik.alagappan@gmail.com" target="_blank"><FaEnvelopeSquare /></a>
                        <div>
                            <Button variant="contained" title="Download Resume" startIcon={<GetAppIcon />}>
                                Download Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;