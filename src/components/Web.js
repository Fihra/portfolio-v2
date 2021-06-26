import React from 'react';
import {Fade, Grid} from '@material-ui/core';

import MusicInspire from '../assets/MusicInspire.jpg';
import MusicianDirectory from '../assets/MusicianDirectory.jpg';
import InstrumentCollection from '../assets/Instrument_Collection.jpg';
import CultureAwareness from '../assets/culture-awareness-101.png';
import JamOut from '../assets/Jam-Out.png';
import JamOutVideo from '../assets/Jam_Out.mp4';
import MusicPlayerElectron from '../assets/Music_Player_Electron.png';
import LearnRondalla from '../assets/Learn_Rondalla.png';
import MusicLeftovers from '../assets/Music_leftovers.png';
import MusicLeftoversVid from '../assets/Music_Leftovers_demo.mp4';
import SaranayVST from '../assets/Saranay_VST_Demo.gif';

import WebCard from './WebCard';

const Web = (props) => {
    const projectData = [
        {
            title: 'Music Leftovers',
            thumbnail: MusicLeftovers,
            info: "A mock E-Commerce shop of used music gear.",
            toolsUsed: "React Hooks, React Hook Form, HTML, Material UI, Email.js, Stripe.js",
            gh: "https://github.com/Fihra/music-shop-ecommerce",
            vid: MusicLeftoversVid
        },
        {
            title: 'Saranay VST',
            thumbnail: SaranayVST,
            info: "Kontakt VST instrument of the Saranay, a Filipino traditional instrument.",
            toolsUsed: "Kontakt 5, Kontakt KSP, JKnobman, Reaper, Paint.NET",
            gh: "https://github.com/Fihra/Saranay-VST-Public",
            vid: "https://youtu.be/8jG3khmjd_g",
            webDemo: "https://firahfabe.itch.io/saranay-vst"
        },
        {
            title: 'Music Player',
            thumbnail: MusicPlayerElectron,
            info: "A desktop app music player that allows the user to playback the audio. Audio manipulation and EQ features planned and to be implemented.",
            toolsUsed: "Electron, Javascript, HTML, CSS, Web Audio API",
            gh: "https://github.com/Fihra/Music-Player-Electron"
        },
        {
            title: 'Learn Filipino Rondalla',
            thumbnail: LearnRondalla,
            info: "A SPA resource about Filipino Rondalla, a traditional music style from Philippines. This is for composers and arrangers to help get started in scoring for it.",
            toolsUsed: "React Hooks, HTML, CSS, react-scroll, react-alice-carousel",
            gh: "https://github.com/Fihra/Learn-Rondalla",
            webDemo: "https://learnfilipinorondalla.netlify.app/"
        },
        {
            title: 'Jam Out',
            thumbnail: JamOut,
            info: "An SPA of a Music Loop Sequence that you can play to with the browser piano keyboard. Sounds built uses Tone.js. ",
            toolsUsed: "React Hooks, Django, Tone.js, Blueprint.js, Kiwi Orbits, React-Piano",
            gh: "https://github.com/Fihra/Jam-Out",
            vid: JamOutVideo,
        },
        {
            title: 'Culture Awareness 101',
            thumbnail: CultureAwareness,
            info: "A SPA that gives random facts for certain mediums to feature creators of the African-American demographic.",
            toolsUsed: "React Hooks, Cheerio, Request, Material UI",
            gh: "https://github.com/Fihra/culture-awareness-101",
            webDemo: "https://culture-awareness-101.herokuapp.com"
        },
        // {
        //     title: 'Hear Me Out (In-Progress)',
        //     thumbnail: null,
        //     info: "A web application for a directory of musicians, audio people.",
        //     toolsUsed: "React-Redux, Node.js, Express, MongoDB",
        //     gh: "https://github.com/Fihra/Hear-Me-Out"

        // },
        {
            title: 'Instrument Collection',
            thumbnail: InstrumentCollection,
            info: "A web app for curating musical instruments to preserve historical data for preservation.",
            toolsUsed: "React-Redux, C#, .NET, MongoDB",
            gh: "https://github.com/Fihra/Instrument-Collection"
        },  
        {
            title: 'Musician Directory',
            thumbnail: MusicianDirectory,
            info: "A CLI app directory for musicians.",
            toolsUsed: "C#, .NET, MongoDB",
            gh: "https://github.com/Fihra/MusicianDirectory"
        },
        {
            title: 'MusicInspire',
            thumbnail: MusicInspire,
            info: "A Project Management web app for composers, songwriters, arrangers, musicians.",
            toolsUsed: "React, Ruby on Rails, SQLite3",
            gh: "https://github.com/Fihra/ComposerInspire-frontend"
        },
    ]
    const showProjects = () => {
        return projectData.map((project, index) => {
            return (
                <Fade in={true} timeout={{ enter: 1000, exit: 1000}} key={index} >
                    <Grid item sm={4}><WebCard key={index} project={project} /></Grid>
                </Fade>
            )
        })
    }

        return(
            <div style={{ padding: 20}}>
                {
                    <Grid container >
                        {/* <Grid item sm={false}/> */}
                        {showProjects()}
                        {/* <Grid item sm={false}/> */}
                    </Grid>
                }
            </div>
            
        )
    }

export default Web;