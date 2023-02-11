import React, { useContext } from 'react';
import { Link, Tooltip } from '@material-ui/core';
import FirahFabeLaud from "../assets/FirahFabe_Laud.gif";
import BandcampLogo from "../assets/bandcamp-button-circle-aqua-512.png"
import YoutubeLogo from "../assets/youtube.png"
import SpotifyLogo from "../assets/spotify.png"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FullContext from './FullContext';

const socialMedias = [
    {
        source: BandcampLogo,
        altText: 'FirahFabe bandcamp',
        href: "https://firahfabe.bandcamp.com/"
    },
    {
        source: YoutubeLogo,
        altText: 'FirahFabe youtube',
        href: "https://www.youtube.com/firahfabe"
    },
    {
        source: SpotifyLogo,
        altText: 'FirahFabe spotify',
        href: "https://open.spotify.com/artist/5MwSQ5vfamJ2RZSeP12ql5?si=YcVRK1X0Q2milxC-nMwHrQ"
    }
]

const showSocialMedia = () => {
    return socialMedias.map((social) => {
        return (
            <Link href={social.href} target="_blank">
                <img src={social.source} className="music-social-media-logo" alt={social.altText}/>
            </Link>
        )
    })
}

const Audio = () => {
    const { dataDispatch } = useContext(FullContext);
    const handleClick = () => {
        dataDispatch({type: "GO_HOME"});
    }

    return(
        <div className="audio-container">
            <button className="back-button" onClick={handleClick} style={{marginTop: 10}}><ArrowUpwardIcon/></button>
            <h1>Music</h1>
            {/* <div className={classes.sideStyles}>
                <Tooltip
                    title="Pixel art by Fabian Fabro."
                    placement="left"
                >
                <img src={FirahFabeLaud} alt="FirahFabe Laud Pixel art"/>
                </Tooltip>
                <Typography variant="h6" color="primary">@FirahFabe</Typography>
                {showSocialMedia()}
            </div>
            <div className={classes.boxStyles}>
                <iframe title="Farlah's Voyage Bandcamp" className={classes.mediaStyles} src="https://bandcamp.com/EmbeddedPlayer/album=159311342/size=large/bgcol=333333/linkcol=4ec5ec/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/farlahs-voyage-filipino-rpg-inspired">Farlah&#39;s Voyage: Filipino RPG-Inspired by FirahFabe</a></iframe>
            </div>
            <div className={classes.boxStyles}>
                <iframe title="Traveling Horizons Bandcamp" className={classes.secondMediaStyles} src="https://bandcamp.com/EmbeddedPlayer/album=782905928/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/traveling-horizons">Traveling Horizons by FirahFabe</a></iframe>
            </div>
            <div className={classes.boxStyles}>
                <div>
                    <Typography variant="h5">More Original Compositions</Typography>
                    <iframe title="Youtube Playlist" className={classes.videoStyles} src="https://www.youtube.com/embed/videoseries?list=PLvJ2CQ-nmKo6OqHGuwnOYwNTKdnILHIwq" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>
                    <Typography variant="h5">VGM & Anime Rondalla Covers</Typography>
                    <iframe title="Youtube Playlist" className={classes.videoStyles} src="https://www.youtube.com/embed/videoseries?list=PLvJ2CQ-nmKo74Y9Ilf5zHJUPmt6u0ziSB" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div> */}



            <div className="music-image">
                <Tooltip
                    title="Pixel art by Fabian Fabro."
                    placement="left"
                >
                <img src={FirahFabeLaud} alt="FirahFabe Laud Pixel art" style={{width: 150, height: 150}}/>
                </Tooltip>
                <h4>@FirahFabe</h4>
                {showSocialMedia()}
            </div>
            <div className="bandcamp-container">
                <iframe title="Cyber Occult Bandcamp" className="bandcamp-styles" src="https://bandcamp.com/EmbeddedPlayer/album=608568155/size=large/bgcol=333333/linkcol=9a64ff/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/cyber-occult">Cyber Occult by FirahFabe</a></iframe>
                <iframe title="Forest Haven Bandcamp" className="bandcamp-styles" src="https://bandcamp.com/EmbeddedPlayer/album=1994845105/size=large/bgcol=333333/linkcol=2ebd35/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/forest-haven">Forest Haven by FirahFabe</a></iframe>
                <iframe title="Farlah's Voyage Bandcamp" className="bandcamp-styles" src="https://bandcamp.com/EmbeddedPlayer/album=159311342/size=large/bgcol=333333/linkcol=4ec5ec/artwork=small/transparent=true/" seamless><a href="https://firahfabe.bandcamp.com/album/farlahs-voyage-filipino-rpg-inspired">Farlah&#39;s Voyage: Filipino RPG-Inspired by FirahFabe</a></iframe>
            </div>
            <div className="youtube-container">
                <div>
                    <h5>More Original Compositions</h5>
                    <iframe title="Youtube Playlist" className="youtube-video-player" src="https://www.youtube.com/embed/videoseries?list=PLvJ2CQ-nmKo6OqHGuwnOYwNTKdnILHIwq" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div>
                    <h5>VGM & Anime Rondalla Covers</h5>
                    <iframe title="Youtube Playlist" className="youtube-video-player" src="https://www.youtube.com/embed/videoseries?list=PLvJ2CQ-nmKo74Y9Ilf5zHJUPmt6u0ziSB" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                {/* <h4>More Original Compositions</h4>
                <iframe title="Youtube Playlist" className="youtube-video-player" src="https://www.youtube.com/embed/videoseries?list=PLvJ2CQ-nmKo6OqHGuwnOYwNTKdnILHIwq" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                <h4>Video Game Music & Anime Rondalla Covers</h4>
                <iframe title="Youtube Playlist" className="youtube-video-player" src="https://www.youtube.com/embed/videoseries?list=PLvJ2CQ-nmKo74Y9Ilf5zHJUPmt6u0ziSB" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
            </div>

        </div>
    )
}

export default Audio;