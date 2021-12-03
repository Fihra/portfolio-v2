import React from 'react';

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