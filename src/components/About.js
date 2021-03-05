import React from 'react';
import { Paper, Fade, Avatar, Grid, Typography, Container } from '@material-ui/core';

import myImg from '../assets/Headshot.jpg';
import SkillsData from './SkillsData';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cardStyles: {
        backgroundColor: "transparent",
        color: 'white', 
        padding: "15px;"  
    },
    skillsContainer: {
        backgroundColor: "transparent",
        color: 'white',
        padding: "25px"
    }
}))

const About = (props) =>  {

    const classes = useStyles();
    return(
        <div>
            <Fade in={true} timeout={{enter: 1000, exit: 1000}} >
            <Grid container justify="center">
                <Paper elevation={0} className={classes.skillsContainer}>
                <Container className={classes.cardStyles} maxWidth="sm">
                    <Avatar alt="Fabian Headshot" src={myImg} style={{height: 150, width: 150, float: 'left', padding: 'auto'}}/>
                        <Typography variant="h6" color="secondary">Hi! I'm Fabian. I am a developer & an audio designer. From integrating music & audio into games, creating music and sfx, to building web & software apps. I'm passionate with combining my skills of audio & technology.</Typography>
                        {/* <Typography variant="body1">Fabian Fabro is a technical sound designer, software engineer, and composer. He is a graduate from Flatiron School Seattle in the software engineering program & from University of Hawai&#699;i at M&#257;noa with a B.A. in music and anthropology. Fabian is passionate with combining his skills of audio & technology.</Typography> */}
                    </Container>
                <SkillsData/>
                </Paper>
            </Grid>
            </Fade>
        </div>
    )
}

export default About;