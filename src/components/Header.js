import React from 'react';
import { Link, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';
import DescriptionIcon from '@material-ui/icons/Description';
import MovieIcon from '@material-ui/icons/Movie';

import AudioTechResume from '../assets/Fabian_Fabro_Tech_Audio_Resume.pdf';
import SoftwareResume from '../assets/Fabian_Software_Engineer_Resume.pdf';
import GameAudioReel from '../assets/Fabian_Game_Audio_Reel.mp4';

const myGithub = "https://www.github.com/fihra";
const myLinkedIn = "https://www.linkedin.com/in/fabian-fabro";
const myTwitter = "https://www.twitter.com/firahfabe";
const myEmail = "mailto:fabrofabian@gmail.com";
const myBlog = "https://dev.to/fihra";
// const myBandcamp = "https://"

const Header = () => {
    return (
        // <div>
        //     <Typography variant="h2" color="secondary">Fabian Fabro</Typography>
        //     <Typography variant="h4" color="secondary">Technical Audio Designer | Software Engineer | Composer</Typography>
        //     <IconButton>
        //         <Link href={myGithub}>
        //         <GitHubIcon></GitHubIcon>
        //         </Link>
        //     </IconButton>
        //     <IconButton>
        //         <Link href={myLinkedIn}>
        //         <LinkedInIcon></LinkedInIcon>
        //         </Link>
        //     </IconButton>
        //     <IconButton>
        //         <Link href={myBlog}>
        //         <WebIcon></WebIcon>
        //         </Link>
        //     </IconButton>  
        //     <IconButton>
        //         <Link href={myTwitter}>
        //         <TwitterIcon></TwitterIcon>
        //         </Link>
        //     </IconButton>         
        //     <IconButton>
        //         <Link href={myEmail}>
        //         <EmailIcon></EmailIcon>
        //         </Link>
        //     </IconButton>   
        //     <IconButton>
        //         <Link href={AudioTechResume} target="_blank">
        //         <DescriptionIcon></DescriptionIcon>
        //         </Link>
        //     </IconButton> 
        //     <IconButton>
        //         <Link href={SoftwareResume} target="_blank">
        //         <DescriptionIcon></DescriptionIcon>
        //         </Link>
        //     </IconButton> 
        //     <IconButton>
        //         <Link href={GameAudioReel} target="_blank">
        //         <MovieIcon></MovieIcon>
        //         </Link>
        //     </IconButton>
        // </div>
        <div className="name-container">
            <h1 className="name-tag">Fabian Fabro</h1>
            <span className="tech-audio-tag">Technical Audio Designer</span> | <span className="software-dev-tag">Software Engineer</span> | <span className="composer-tag">Composer</span>
        </div>
    )
}

export default Header;