import React, { useContext } from 'react';
// import { Paper, Fade, Avatar, Grid, Typography, Container } from '@material-ui/core';
// import myImg from '../assets/Headshot.jpg';
import myImg from '../assets/solo_headshot_nov_2021.jpg';
import SkillsData from './SkillsData';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FullContext from './FullContext';

// import { makeStyles } from '@material-ui/styles';
// const useStyles = makeStyles(() => ({
//     cardStyles: {
//         backgroundColor: "transparent",
//         color: 'white', 
//         padding: "15px;"  
//     },
//     skillsContainer: {
//         backgroundColor: "transparent",
//         color: 'white',
//         padding: "25px"
//     }
// }))

const About = (props) =>  {

    // const classes = useStyles();
    const { data, dataDispatch } = useContext(FullContext);

    const handleClick = () => {
        dataDispatch({type: "GO_HOME"});
    }

    return(
        <div className="about-container">
            {/* <Fade in={true} timeout={{enter: 1000, exit: 1000}} >
            <Grid container justify="center">
                <Paper elevation={0} className={classes.skillsContainer}>
                <Container className={classes.cardStyles} maxWidth="sm">
                    <Avatar alt="Fabian Headshot" src={myImg} style={{height: 150, width: 150, float: 'left', padding: 'auto'}}/>
                        <Typography variant="h6" color="secondary">Hi! I'm Fabian. I am a developer & an audio designer. From integrating music & audio into games, creating music and sfx, to building web & software apps. I'm passionate with combining my skills of audio & technology.</Typography>
                        <Typography variant="body1">Fabian Fabro is a technical sound designer, software engineer, and composer. He is a graduate from Flatiron School Seattle in the software engineering program & from University of Hawai&#699;i at M&#257;noa with a B.A. in music and anthropology. Fabian is passionate with combining his skills of audio & technology.</Typography>
                    </Container>
                <SkillsData/>
                </Paper>
            </Grid>
            </Fade> */}
            <main>
                <h1 style={{textAlign: "left", marginLeft: 180}}>About</h1>
                <img src={myImg} alt="solo-headshot"/>
                <button onClick={handleClick} className="back-button" style={{position: 'absolute', top: 30} }><ArrowForwardIcon/></button>
                <p className="about-paragraph">Hi! I'm Fabian. I am a technical audio designer, software developer & composer. From integrating music & audio into games, creating music and sfx, to building web & software apps. I'm passionate with combining my skills of audio & technology. I have worked on collaborative game jams as a technical sound designer & composer. Developed solo game projects from working in programming, music, sound design, & art. Built a variety of software apps, from web apps to an audio plugin. </p>
                
            </main>
            <SkillsData/>
            
        </div>
    )
}

export default About;