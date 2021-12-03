import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Link, Grow } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GamesIcon from '@material-ui/icons/Games';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cardStyles: {
        width: 300,
        height: 500,
        padding: 50,
        backgroundColor: "transparent",
        color: 'white'
    }
}))

const ProjectCard = (props) => {

    const checkLink = (projectLink) => {
        if(projectLink.includes("github")){
            return (<Link href={projectLink}>
                <IconButton className="icon-color">
                    <GitHubIcon/>
                </IconButton>
            </Link>
            )
        } else if(projectLink.includes("youtu.be")){
            return (<Link href={projectLink}>
                <IconButton className="icon-color">
                    <YouTubeIcon/>
                </IconButton>
            </Link>
            )
        } else if(projectLink.includes("itch") || projectLink.includes("global")){
            return (<Link href={projectLink}>
                <IconButton className="icon-color">
                    <GamesIcon/>
                </IconButton>
            </Link>
            )
        } else if(projectLink.includes("bandcamp")){
            return (<Link href={projectLink}>
                <IconButton className="icon-color">
                    <MusicNoteIcon/>
                </IconButton>
            </Link>
            )
        }
    }

    const { title, thumbnail, info, role, toolsUsed, gh, videoFootage, playGame, soundtrack } = props.project;
    
    const classes = useStyles();
    
    return(
        // <Grow in={true} timeout={{enter: 1000}}>
        //     <Card className={classes.cardStyles}>
        //         <CardHeader title={title}/>
        //         <CardMedia className="project-image" image={thumbnail} alt={thumbnail}/>
        //         <CardContent>
        //             <Typography>{info}</Typography>
        //         </CardContent>
        //         {role === null ? null : `Role: ${role}`}
        //         <CardContent>
        //             <Typography>Tools used: {toolsUsed}</Typography>
        //         </CardContent>
        //         <CardActions>
        //             {gh === null ? null : checkLink(gh)}
        //             {videoFootage === null ? null : checkLink(videoFootage)}
        //             {playGame === null ? null : checkLink(playGame)}
        //             {soundtrack === null ? null : checkLink(soundtrack)}
        //         </CardActions>
        //     </Card>
        // </Grow>
        <div className="project-container">
            <img src={thumbnail} alt={title}/>
            <h2>{title}</h2>
            <p>{role === null ? null : `Role: ${role}`}</p>
            <p>{info}</p>
            <div className="project-links">
                {gh === null ? null : checkLink(gh)}
                {videoFootage === null ? null : checkLink(videoFootage)}
                {playGame === null ? null : checkLink(playGame)}
                {soundtrack === null ? null : checkLink(soundtrack)}
            </div>
        </div>
    )
}

export default ProjectCard;