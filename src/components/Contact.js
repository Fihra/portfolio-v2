import React, { useContext } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FullContext from './FullContext';

import { Link, IconButton } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
// import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';

// import AudioTechResume from '../assets/Fabian_Fabro_Tech_Audio_Resume.pdf';
// import SoftwareResume from '../assets/Fabian_Software_Engineer_Resume.pdf';

const myGithub = "https://www.github.com/fihra";
const myLinkedIn = "https://www.linkedin.com/in/fabian-fabro";
const myTwitter = "https://www.twitter.com/firahfabe";
const myEmail = "mailto:fabrofabian@gmail.com";
const myBlog = "https://dev.to/fihra";

const Contact = () => {
    const { dataDispatch } = useContext(FullContext);

    const handleClick = () => {
        dataDispatch({type: "GO_HOME"});
    }
    return(
        <div className="contact-container">
            <h1>Contact</h1>
            <button onClick={handleClick} className="back-button" style={{position: 'absolute', top: 20, left: 20} }><ArrowBackIcon/></button>
            {/* <p>Currently seeking for <b><u>Technical Sound Designer</u></b> or <b><u>Software Engineer</u></b> opportunities.</p> */}
            <p>If you are looking for someone to help with <b><u>Game Audio Implementation</u></b>, or seeking a <b><u>Composer</u></b>,</p>
            <p>Please email me <a href={myEmail}>here</a>.</p>
            <div className="social-links">
             <IconButton>
               <Link href={myGithub}>
                 <GitHubIcon></GitHubIcon>
                 </Link>
             </IconButton>
             <IconButton>
                 <Link href={myLinkedIn}>
                 <LinkedInIcon></LinkedInIcon>
                 </Link>
             </IconButton>
             <IconButton>
                 <Link href={myTwitter}>
                 <TwitterIcon></TwitterIcon>
                 </Link>
             </IconButton>
             <IconButton>
                 <Link href={myBlog}>
                 <WebIcon></WebIcon>
                 </Link>
             </IconButton>
            </div>
        </div>
    )
}

export default Contact;