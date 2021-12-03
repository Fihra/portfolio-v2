import React from 'react';
import { Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Link, Grow } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import MovieIcon from '@material-ui/icons/Movie';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cardStyles: {
        width: 300,
        height: 500,
        padding: 10,
        backgroundColor: "transparent",
        color: 'white'
    }
}))

const WebCard = (props) => {
    const { title, thumbnail, info, toolsUsed, gh, vid} = props.project;

    const classes = useStyles();

    const showDemoLink = () => {
        return <Link href={props.project.webDemo}>
            <IconButton color="primary">
                <WebIcon/>
            </IconButton>
        </Link>
    }

    return(
        // <Grow in={true} timeout={1000}>
        //     <Card className={classes.cardStyles}>
        //         <CardHeader title={title}/>
        //         {thumbnail ? <CardMedia className="project-image" image={thumbnail}/> : <div className="project-image"/>}
        //         <CardContent>
        //             <Typography>{info}</Typography>
        //             <Typography>Tools used: {toolsUsed}</Typography>
        //         </CardContent>
        //         <CardActions>
        //             <Link href={gh}>
        //                 <IconButton color="primary">
        //                     <GitHubIcon/>
        //                 </IconButton>
        //             </Link>
        //             {vid ? <Link href={vid}>
        //                 <IconButton color="primary">
        //                     <MovieIcon/>
        //                 </IconButton>
        //             </Link> : null}
        //             {props.project.webDemo ? showDemoLink() : null}
        //         </CardActions>
        //     </Card>
        // </Grow>
        <div className="web-container">
            <img src={thumbnail} alt={title}/>
            <h2>{title}</h2>
            <p>{info}</p>
            <div className="project-links">
                <Link href={gh}>
                    <IconButton>
                        <GitHubIcon/>
                    </IconButton>
                </Link>
                <Link href={vid}>
                    <IconButton>
                        <MovieIcon/>
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default WebCard;