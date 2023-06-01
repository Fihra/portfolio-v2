import React, { useContext } from 'react';

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
import WaverSynth from '../assets/Waver_Synth.gif';
import PolarPatterns from '../assets/polar-patterns-app.gif';
import ErgoArgot from '../assets/ergo-argot-demo.gif';

import WebCard from './WebCard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FullContext from './FullContext';

const Web = () => {

    const { dataDispatch } = useContext(FullContext);

    const handleClick = () => {
        dataDispatch({type: "GO_HOME"});
    }

    const projectData = [
        {
            title: "Ergo Argot",
            thumbnail: ErgoArgot,
            info: "A mobile app where the user can search a term based on the Urban Dictionary API",
            toolsUsed: "React Native, Expo, Urban Dictionary API, Axios, Dotenv",
            gh: "https://github.com/Fihra/ergo-argot",
            webDemo: "https://ergo-argot.netlify.app/"
        },
        {
            title: "Polar Patterns",
            thumbnail: PolarPatterns,
            info: "A Web app that displays polar patterns for microphone recordings",
            toolsUsed: "React Hooks, HTML Canvas, React tooltip, React Spring 3D Carousel, React Transition Group",
            gh: "https://github.com/Fihra/polar-patterns",
            webDemo: "https://polar-patterns.netlify.app/"
        },
        {
            title: "Waver Synth",
            thumbnail: WaverSynth,
            info: "A Web synthesizer to play & record a 10 sec melody",
            toolsUsed: "React Hooks, Tone.js, Audio Oscilloscope, React Simple Knob",
            gh: "https://github.com/Fihra/waver-synth",
            webDemo: "https://waversynth.netlify.app/"
        },
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
                // <Fade in={true} timeout={{ enter: 1000, exit: 1000}} key={index} >
                //     <Grid item sm={4}><WebCard key={index} project={project} /></Grid>
                // </Fade>
                <WebCard key={index} project={project} />
            )
        })
    }

        return(
            <div className="software-projects-container" >
                {/* {
                    <Grid container >
                        {showProjects()}
                    </Grid>
                } */}
               
                <div className="web-side-bar">
                    <h1>Projects</h1>
                    <button className="back-button" onClick={handleClick}><ArrowBackIcon/></button>
                </div>
                
                <div style={{float: "right"}}>
                    {showProjects()}
                </div>
            </div>
            
        )
    }

export default Web;