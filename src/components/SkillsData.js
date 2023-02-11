import React, { useState } from 'react';

import csharp_logo from '../assets/tech-logos/c-sharp-logo.png';
import css_logo from '../assets/tech-logos/css-logo.png';
import django_logo from '../assets/tech-logos/django-lgoo.png';
import fmod_logo from '../assets/tech-logos/fmod-icon.png';
import html_logo from '../assets/tech-logos/html-logo.png';
import javascript_logo from '../assets/tech-logos/javascript-logo.png';
import kontakt_logo from '../assets/tech-logos/kontakt-ksp-logo.png';
import musescore_logo from '../assets/tech-logos/musescore-logo.png';
import node_logo from '../assets/tech-logos/node-js-logo.png';
import paintdotnet_logo from '../assets/tech-logos/paintdotnet-logo.png';
import piskel_logo from '../assets/tech-logos/piskel-logo.png';
import python_logo from '../assets/tech-logos/python-logo.png';
import react_logo from '../assets/tech-logos/react-logo.png';
import reaper_logo from '../assets/tech-logos/reaper-logo.png';
import rubyonrails_logo from '../assets/tech-logos/ruby_on_rails-logo.png';
import unity_logo from '../assets/tech-logos/unity-logo.png';
import unreal_engine_logo from '../assets/tech-logos/unreal-engine-logo.png';
import wwise_logo from '../assets/tech-logos/wwise_logo.png';
// import supercollider_logo from '../assets/tech-logos/supercollider-logo.png';

// const languages = ["Javascript", "C#", "Python", "KSP", "C++", "Ruby", "HTML", "CSS", "SQL"];
// const frameworks = ["React", "Redux", "Unity", "Unreal Engine", "Django", "ASP.NET", "Ruby on Rails"];
// const audioTools = ["Wwise", "FMOD", "Reaper", "Musescore"];
// const otherTools = ["MongoDB", "Node.js", "Express", "SQLite3", "PostgreSQL", "Material UI", "Git & Github", "Postman"];
// const methodologies = ["MVC (Model-View-Controller)", "OOP (Object-Oriented Programming)", "Functional Programming", "Restful Routes API"];

const languages2 = {
    "Javascript": javascript_logo,
    "C#": csharp_logo,
    "HTML": html_logo,
    "CSS": css_logo,
    "Python": python_logo,
}

const frameworks2 = {
    "React": react_logo,
    "Unity": unity_logo,
    "Unreal Engine": unreal_engine_logo,
    "Kontakt KSP": kontakt_logo,
    "Django": django_logo,
    "Ruby on Rails": rubyonrails_logo
}

const otherTools2 = {
    "Wwise": wwise_logo,
    "FMOD": fmod_logo,
    "Reaper": reaper_logo,
    "Musescore": musescore_logo,
    "Node.js": node_logo,
    "Paint.NET": paintdotnet_logo,
    "Piskel": piskel_logo
}

const SkillsData = (props) => {
    const [isLanguage, setIsLanguage] = useState("");

    // const showItems = (itemsArray) => {
    //     return itemsArray.map((item, index)=> {
    //         return <ListItem key={index} className="item-list">{item}</ListItem>
    //     })
    // }

    const showKey = (key) => {
        setIsLanguage(key);
    }

    const showItems2 = (itemsCollection) => {
        return Object.entries(itemsCollection).map(([key, value]) => {
            return <img className="skill-img" key={key} alt={key} src={value} onMouseOver={() => showKey(key)} />
        })
    }
    
    return(
        // <Grid container justify="center" className={classes.skillsContainer}>
        //     <Grid item xs={false} />
        //     <Grid xs={2} item>
        //         <List>
        //             <Typography variant="h6" className={classes.skillStyles}>Languages</Typography>
        //             {showItems(languages)}
        //         </List>
        //     </Grid>
        //     <Grid xs={2} item>
        //         <List>
        //             <Typography variant="h6" className={classes.skillStyles}>Frameworks</Typography>
        //             {showItems(frameworks)}
        //         </List>
        //     </Grid>
        //     <Grid xs={2} item>
        //         <List>
        //             <Typography variant="h6" className={classes.skillStyles}>Audio Tools</Typography>
        //             {showItems(audioTools)}
        //         </List>
        //     </Grid>
        //     <Grid xs={2} item>
        //         <List>
        //             <Typography variant="h6" className={classes.skillStyles}>Other Tools</Typography>
        //             {showItems(otherTools)}
        //         </List>
        //     </Grid>
        //     <Grid xs={2} item>
        //         <List>
        //             <Typography variant="h6" className={classes.skillStyles}>Methodologies</Typography>
        //             {showItems(methodologies)}
        //         </List>
        //     </Grid>
        //     <Grid item xs={false} />
        // </Grid>
        <div className="skills-container">
            <br/>
            <br/>
            {isLanguage !== "" ? <h3 className="show-certain-skill"> | {isLanguage} |</h3> : null} 
             <div className="all-skills">
                <div>
                    <h3>Languages</h3>
                    <div className="languages-container">
                        {showItems2(languages2)}
                    </div>
                </div>
                <div>
                    <h3>Frameworks</h3>
                    <div className="frameworks-container">
                        {showItems2(frameworks2)}
                    </div>
                </div>
                <div>
                    <h3>Other Tools</h3>
                    <div className="othertools-container">
                        {showItems2(otherTools2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsData;