import React from 'react';
import { IconButton,  Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import MovieIcon from '@material-ui/icons/Movie';

const WebCard = (props) => {
    //toolsUsed
    const { title, thumbnail, info, gh, vid, webDemo} = props.project;

    const showDemoLink = () => {
        return <Link href={webDemo}>
            <IconButton color="primary">
                <WebIcon/>
            </IconButton>
        </Link>
    }

    const showVid = () => {
        return <Link href={vid}>
            <IconButton>
                <MovieIcon/>
            </IconButton>
        </Link>
    }

    const showGithub = () => {
        return <Link href={gh}>
            <IconButton>
                <GitHubIcon/>
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
                {gh ? showGithub() : null}
                {vid ? showVid() : null}
                {webDemo ? showDemoLink() : null}
            </div>
        </div>
    )
}

export default WebCard;