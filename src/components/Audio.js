import React from 'react';
import { Link, Typography, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FirahFabeLaud from "../assets/FirahFabe_Laud.gif";
import BandcampLogo from "../assets/bandcamp-button-circle-aqua-512.png"
import YoutubeLogo from "../assets/youtube.png"
import SpotifyLogo from "../assets/spotify.png"

const useStyles = makeStyles(() => ({
    mediaStyles: {
        border: 0,
        width: "400px",
        height: "272px",
        paddingTop: "10px",
        margin: "20 auto",
    },
    secondMediaStyles: {
        border: 0,
        width: "400px",
        height: "172px",
        paddingTop: "10px",
        margin: "20 auto",
    },
    boxStyles: {
        position: "relative",
        display: "flex",
        paddingLeft: "150px",
        color: "white"
    },
    videoStyles: {
        width: "560px",
        height: "315px",
        padding: "10px"
    },
    bandcampStyles: {
        border: 0,
        width: "100%",
        height: "50px"
    },
    sideStyles: {
        float: "left",
        paddingLeft: "250px",
        marginLeft: "30px"
        // padding: "10px"
    },
    socialMediaContainer: {
        float: "right"
    }

}))

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
    const classes = useStyles();
    return(
        <div>
            <div className={classes.sideStyles}>
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
            </div>

        </div>
    )
}

export default Audio;