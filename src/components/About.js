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
                <h1 className="about-header">About</h1>
                <button onClick={handleClick} className="back-button" style={{position: 'absolute', top: 25} }><ArrowForwardIcon/></button>
                <div className="about-paragraph">
                <img className="solo-headshot" src={myImg} alt="solo-headshot"/>
                <p >Hi! I'm <span>Fabian</span>. I am a <span>technical audio designer</span>, <span>software developer</span>, <span>composer</span>, and <span>musician</span>. From integrating music & audio into games, creating music and sfx, to building web & software apps. </p>
                <p>
                I'm passionate with combining my skills of audio & technology. I have worked on collaborative game jams as a technical sound designer, audio implementer & composer. I've also developed my own solo game projects with programming, music, sound design, & art. Built a variety of software apps, from web apps to an audio plugin. 
                </p>
                {/* <h2>Experience</h2>
                <p>Software Developer @ <b>Servco Pacific Inc.</b>, March 2022 - Present</p>
                <ul>
                    <li>Update & maintain </li>
                    <li>Task 2</li>
                </ul>
                <h2>Education</h2>
                <p><b>Flatiron School</b>, August 2019 | <i>Seattle, WA</i> 15-week intensive coding bootcamp in Software Engineering</p>
                <p><b>Unviversity of Hawai'i at Manoa</b>, December 2016 | <i>Honolulu, HI</i> Bachelor of Arts: Music & Anthropology</p> */}
                </div>
            </main>
            <SkillsData/>
            
        </div>
    )
}

export default About;