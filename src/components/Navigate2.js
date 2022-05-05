import React, { useState, useContext } from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Games from './Games';
import Web from './Web';
import Audio from './Audio';
import FullContext from './FullContext';

const Navigate = (props) => {
    const [isShowButtons, setIsShowButtons] = useState(true);
    const { dataDispatch, data } = useContext(FullContext);

    const handleChange = (event) => {
        switch(event.target.value){
            case "about":
            case "contact":
            case "games":
            case "projects":
            case "music":
                dataDispatch({type: "SELECTED_LINK", payload: event.target.value});
                setIsShowButtons(!isShowButtons);
                return;
            default:
                dataDispatch({type: "GO_HOME"});
                setIsShowButtons(!isShowButtons);
                return;
        }
        
    }
    
    const buttonsActive = () => {
        if(data.showButtons){
            return (
                <nav>
                    {/* <div className="about-btn"><button className="link-btn" value="about" onClick={handleChange}>About</button></div>
                    <div className="contact-btn"><button className="link-btn" value="contact" onClick={handleChange}>Contact</button></div>
                    <div className="games-btn"><button className="link-btn" value="games" onClick={handleChange}>Games</button></div>
                    <div className="projects-btn"><button className="link-btn" value="projects" onClick={handleChange}>Projects</button></div>
                    <div className="music-btn"><button className="link-btn" value="music" onClick={handleChange}>Music</button></div> */}

                    <button className="link-btn about-btn" value="about" onClick={handleChange}>About</button>
                    <button className="link-btn contact-btn" value="contact" onClick={handleChange}>Contact</button>
                    <button className="link-btn games-btn" value="games" onClick={handleChange}>Games</button>
                    <button className="link-btn projects-btn" value="projects" onClick={handleChange}>Projects</button>
                    <button className="link-btn music-btn" value="music" onClick={handleChange}>Music</button>
                </nav>
            )
        } else {
            return null;
        }
    }

    const checkSelection = () => {
        switch(data.selectedPage){
            case "home":
                return (< Header/>);
            case "about":
                return (<About />);
            case "contact":
                return (<Contact/>);
            case "games":
                console.log("Show Games Page");
                return ( <Games />);
            case "projects":
                console.log("Show Projects Page");
                return ( <Web />);
            case "music":
                console.log("Show Music Page");
                return <Audio/>;
            default:
                // setSelectionState("header");
                return;
        }
    }

    return(
        <div style={{overflowY: "hidden"}}>
            {/* <Tabs textColor='primary' value={selectionState} onChange={handleChange} aria-label='wrapped label tabs example' centered>
                <Tab className={classes.navBarStyles}  value="About" label="About" aria-label="About"/>
                <Tab className={classes.navBarStyles}  value="Games" label="Games" aria-label="Games"/>
                <Tab className={classes.navBarStyles}  value="Web" label="Software Apps" aria-label="Software Apps"/>
                <Tab className={classes.navBarStyles}  value="Music" label="Music" aria-label="Music"/>
            </Tabs>
            {selectionState === "About" ? <About />: null}
            {selectionState === "Games" ? <Games /> : null}
            {selectionState === "Web" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Web /></Fade> : null}
            {selectionState === "Music" ? <Audio />: null} */}
            {checkSelection()}
            {buttonsActive()}

        </div> 
    )
}

export default Navigate;