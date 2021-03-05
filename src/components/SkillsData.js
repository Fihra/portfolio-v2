import React from 'react';
import { List, ListItem, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const languages = ["Javascript", "C#", "Python", "C++", "Ruby", "HTML", "CSS", "SQL"];
const frameworks = ["React/React Hooks", "Redux", "Unity", "Unreal Engine", "Django", "ASP.NET", "Ruby on Rails"];
const audioTools = ["Wwise", "FMOD", "Reaper", "Musescore"];
const otherTools = ["MongoDB", "Node.js", "Express", "SQLite3", "PostgreSQL", "Material UI", "Git & Github", "Postman"];
const methodologies = ["MVC (Model-View-Controller)", "OOP (Object-Oriented Programming)", "Functional Programming", "Restful Routes API"];

const useStyles = makeStyles(() => ({
    skillStyles: {
        fontWeight: 'bold',
    },
    skillsContainer: {
        backgroundColor: "transparent",
        color: 'white',
    }
}))

const SkillsData = (props) => {
    const classes = useStyles();

    const showItems = (itemsArray) => {
        return itemsArray.map((item, index)=> {
            return <ListItem key={index} className="item-list">{item}</ListItem>
        })
    }
    
    return(
        <Grid container justify="center" className={classes.skillsContainer}>
            <Grid item xs={false} />
            <Grid xs={2} item>
                <List>
                    <Typography className={classes.skillStyles}>Languages</Typography>
                    {showItems(languages)}
                </List>
            </Grid>
            <Grid xs={2} item>
                <List>
                    <Typography className={classes.skillStyles}>Frameworks</Typography>
                    {showItems(frameworks)}
                </List>
            </Grid>
            <Grid xs={2} item>
                <List>
                    <Typography className={classes.skillStyles}>Audio Tools</Typography>
                    {showItems(audioTools)}
                </List>
            </Grid>
            <Grid xs={2} item>
                <List>
                    <Typography className={classes.skillStyles}>Other Tools</Typography>
                    {showItems(otherTools)}
                </List>
            </Grid>
            <Grid xs={2} item>
                <List>
                    <Typography className={classes.skillStyles}>Methodologies</Typography>
                    {showItems(methodologies)}
                </List>
            </Grid>
            <Grid item xs={false} />
        </Grid>
    )
}

export default SkillsData;