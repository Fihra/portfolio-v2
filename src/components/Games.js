import React, { useContext } from 'react';

import ProjectCard from './ProjectCard';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FullContext from './FullContext';
import ReactPlayer from 'react-player';

//Project Image Assets
import Maliksi from '../assets/Maliksi.png';
import MultoIlaw from '../assets/multo-ilaw.png';
import RitsuMochi from '../assets/ritsu_mochi.png';
import Buwan from '../assets/Reincarnation_of_Buwan.jpg';
import AsteroidDefense from '../assets/Asteroid_Defense.png';
import NLV from '../assets/NLV.png';
import OshaCoaster from '../assets/OshaCoaster.jpg';
import fmodAudioDemo from '../assets/FMOD_Audio_Integration_Demo.jpg';
import DIYorDie from '../assets/DIY_or_Die.jpg';
import PathFinder from '../assets/pathfinder_laststand.png';
import SideTracked from '../assets/Sidetracked.jpg';
import DeathByDebt from '../assets/DeathByDebt.png';

const Games = (props) => {
    const { dataDispatch } = useContext(FullContext);

    const gameAudioReel = "https://www.youtube.com/watch?v=LLDqO-Kff68"

    const handleClick = () => {
        dataDispatch({type: "GO_HOME"});
    }

    const projectData = [
        {
            title: 'Maliksi',
            thumbnail: Maliksi,
            info: 'A 2D boss rush game where you fight Filipino folklore-inspired creatures to retrieve the stolen light.',
            role: "Solo Developer",
            toolsUsed: "Unreal Engine, Wwise, UE Blueprinting, Piskel, Reaper, Musescore, Paint.NET",
            gh: null,
            videoFootage: null,
            playGame: null,
            soundtrack: null
        },
        {
            title: 'Multo ilaw',
            thumbnail: MultoIlaw,
            info: "A 2D game where you play as a ghost who must bring a light to a village to ward off the evil spirits.",
            role: "Solo Developer",
            toolsUsed: "Unity, Wwise, C#, Piskel, Reaper, Musescore",
            gh: "https://github.com/Fihra/multo-ilaw",
            videoFootage: "https://youtu.be/70yQqVuBUv4",
            playGame: "https://firahfabe.itch.io/multo-ilaw",
            soundtrack: "https://firahfabe.bandcamp.com/album/multo-ilaw-game-soundtrack"
        },
        {
            title: 'Reincarnation of Buwan (On Hold)',
            thumbnail: Buwan,
            info: "A 2D Unity Action-Adventure game where you play as Buwan, an Aswang weredog, to save the world from an evil witch.",
            role: "Solo Developer",
            toolsUsed: "Unity, C#, Piskel, Wwise, Reaper, Musescore",
            gh: null,
            videoFootage: null,
            playGame: null,
            soundtrack: null
        },
        {
            title: 'Ritsu & Mochi',
            thumbnail: RitsuMochi,
            info: "A Unity isometric puzzle game. Follow Ritsu the young robotics engineer and MOCHI, his trusty robit as they explore an abandoned factory,",
            role: "Technical Sound Designer",
            toolsUsed: "Unity, C#, FMOD, Reaper",
            gh: "https://github.com/zsd4yr/mochi",
            videoFootage: null,
            playGame: "https://globalgamejam.org/2021/games/ritsu-mochi-9",
            soundtrack: null
        },
        {
            title: 'Asteroid Defense',
            thumbnail: AsteroidDefense,
            info: "A Unity 2D Space-shooter game where you shoot down falling asteroids hurling towards Earth.",
            role: "Solo Developer",
            toolsUsed: "Unity, C#, Wwise, Reaper, Musescore, Paint.NET",
            gh: "https://github.com/Fihra/Asteroid-Defense",
            videoFootage: "https://youtu.be/rDpsfB2TOX0",
            playGame: null,
            soundtrack: null
        },
        {
            title: 'Night of the Lesbian Vampires',
            thumbnail: NLV,
            info: "From Spooktober Game Jam 2020, a Ren'py dating visual novel game about vampire lesbians.",
            role: "Composer, Sound Designer, & Dialogue Audio Editor",
            toolsUsed: "Reaper, Musescore",
            gh: null,
            videoFootage: "https://youtu.be/GqrOw6bhDKk",
            playGame: "https://scribbles.itch.io/night-of-the-lesbian-vampires",
            soundtrack: null
        },
        {
            title: 'DIY or Die',
            thumbnail: DIYorDie,
            info: "From Global Game Jam 2020, a 2D Point & Click Game to patch up your destroying car while driving to the next pit stop.",
            role: "Technical Sound Designer",
            toolsUsed: "FMOD, C#, Unity, Reaper",
            gh: "https://github.com/DIY-or-Die/diy-or-die",
            videoFootage: "https://youtu.be/1_Od8eUzCoU",
            playGame: "https://globalgamejam.org/2020/games/diy-or-die-5",
            soundtrack: null
        },
        {
            title: 'Death by Debt',
            thumbnail: DeathByDebt,
            info: "From NaNoReNo 2020 Game Jam, a Ren'py visual novel game of after losing your job, you are on the hunt for another one before getting evicted from your apartment.",
            role: "Composer",
            toolsUsed: "Musescore, Reaper",
            videoFootage: null,
            gh: null,
            playGame: "https://zevvy.itch.io/death-by-debt",
            soundtrack: "https://firahfabe.bandcamp.com/album/death-by-debt-game-soundtrack"
        },
        {
            title: "Sidetracked!",
            thumbnail: SideTracked,
            info: "From NaNoReNo 2020 Game Jam, a Ren'py visual novel game about getting one thing done in the course of a day due to many distractions.",
            role: "Composer & Sound Designer",
            toolsUsed: "Musescore, Reaper, Foley recording",
            videoFootage: null,
            gh: null,
            playGame: "https://komehara.itch.io/sidetracked",
            soundtrack: "https://firahfabe.bandcamp.com/album/sidetracked-game-soundtrack"
        },
        {
            title: 'PathFinder: Last Stand',
            thumbnail: PathFinder,
            info: "From Lux Game Jam 2020, 2D Top-down Survival Arcade, with a revolver & lights at your disposal, you must fend off enemies that hide in the shadows.",
            role: "Sound Designer & Composer",
            toolsUsed: "Reaper, Musescore",
            gh: null,
            videoFootage: null,
            playGame: "https://codetorex.itch.io/pathfinder",
            soundtrack: null
        },
        {
            title: 'OshaCoaster',
            thumbnail: OshaCoaster,
            info: "From Seattle Indies Game Jam, a sandbox game to create your own amusement park inflict as much and suffering to allow you to cash in on that sweet medical bill money.",
            role: "Technical Sound Designer",
            toolsUsed: "C#, Unity, Reaper",
            gh: "https://github.com/terrehbyte/oshacoaster",
            videoFootage: null,
            playGame: "https://terrehbyte.itch.io/osha-coaster",
            soundtrack: null
        },
        {
            title: 'FMOD Audio Integration Demo',
            thumbnail: fmodAudioDemo,
            info: "A Unity demo that utilizes FMOD music layering integration and sound effects.",
            role: "Solo Developer",
            toolsUsed: "FMOD, C#, Unity, Reaper, Musescore",
            gh: "https://github.com/Fihra/FMOD-Audio_Integration_Demo",
            videoFootage: "https://youtu.be/cNpKzpzEpts",
            playGame: null,
            soundtrack: null
        }
        
    ]

    const showProjects = () => {
        return projectData.map((project, index) => {
            return (
                // <Fade in={true} timeout={{ enter: 1000, exit: 1000}} >
                    // <Grid key={index} item sm={4}><ProjectCard key={index} project={project} /></Grid>
                    <ProjectCard key={index} project={project} />
                // </Fade>
            )
        })
    }

        return(
            <div style={{ padding: 20}}>
                {/* {
                    <Grid container >
                        {showProjects()}
                    </Grid>
                } */}
                <div style={{float: "left"}}>
                {showProjects()}
                </div>
                <div className="project-side-bar">
                    <h1>Games</h1>
                    <button className="back-button" onClick={handleClick}><ArrowForwardIcon/></button>
                    <h3>Game Audio Reel</h3>
                    <ReactPlayer url={gameAudioReel} width={475} className="video-reel-player"/>
                </div>
            </div>
            
        )
    }

export default Games;