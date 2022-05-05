import React, { useContext } from 'react';
import myImg from '../assets/solo_headshot_nov_2021.jpg';
import SkillsData from './SkillsData';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FullContext from './FullContext';

const About = (props) =>  {
    const { dataDispatch } = useContext(FullContext);

    const handleClick = () => {
        dataDispatch({type: "GO_HOME"});
    }

    return(
        <div className="about-container">
            <main>
                <h1 style={{textAlign: "left", marginLeft: 180}}>About</h1>
                <img className="solo-headshot" src={myImg} alt="solo-headshot"/>
                <button onClick={handleClick} className="back-button" style={{position: 'absolute', top: 30} }><ArrowForwardIcon/></button>
                <p className="about-paragraph">Hi! I'm Fabian. I am a technical audio designer, software developer, composer, and musician. From integrating music & audio into games, creating music and sfx, to building web & software apps. I'm passionate with combining my skills of audio & technology. I have worked on collaborative game jams as a technical sound designer & composer. I've also developed my own solo game projects with programming, music, sound design, & art. Built a variety of software apps, from web apps to an audio plugin. </p>
            </main>
            <SkillsData/>
            
        </div>
    )
}

export default About;