import React from 'react';
import { Paper, Fade, Avatar, Grid, Typography, Container } from '@material-ui/core';

import myImg from '../assets/Headshot.jpg';
import SkillsData from './SkillsData';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cardStyles: {
        backgroundColor: "#012A36",
        color: 'white',   
    },
    skillsContainer: {
        backgroundColor: "#012A36",
        color: 'white'
    }
}))

const About = (props) =>  {

    const classes = useStyles();
    return(
        <div>
            <Fade in={true} timeout={{enter: 1000, exit: 1000}} >
            <Grid container justify="center" >
                <Paper elevation={0} className={classes.skillsContainer}>
                <Container className={classes.cardStyles} maxWidth="sm">
                    <Avatar alt="Fabian Headshot" src={myImg} style={{height: 150, width: 150, float: 'left', padding: 'auto'}}/>
                        <Typography variant="body1">Fabian Fabro is a technical sound designer, software engineer, and composer.  He is a graduate from Flatiron School Seattle in the software engineering program. He is also a graduate from University of Hawai&#699;i at M&#257;noa with a B.A. in music and anthropology. Fabian is passionate with finding the intersection of audio and technology.</Typography>
                    </Container>
                <SkillsData/>
                </Paper>
            </Grid>
            </Fade>
        </div>
    )
}

export default About;