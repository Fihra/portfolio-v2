import React, { useState } from 'react';
import { Tabs, Tab, Fade } from '@material-ui/core';
import About from './About';
import Games from './Games';
import Web from './Web';
import Audio from './Audio';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    navBarStyles: {
        fontSize: 20,
        color: '#ffffff' 
    }
}))

const Navigate = (props) => {
    const classes = useStyles();

    const [selectionState, setSelectionState] = useState("Games")

    const handleChange = (event, newVal) => {
        setSelectionState(newVal)
    }

    return(
        <div>
            <Tabs textColor='primary' value={selectionState} onChange={handleChange} aria-label='wrapped label tabs example' centered>
                <Tab className={classes.navBarStyles}  value="About" label="About" aria-label="About"/>
                <Tab className={classes.navBarStyles}  value="Games" label="Games" aria-label="Games"/>
                <Tab className={classes.navBarStyles}  value="Web" label="Software Apps" aria-label="Software Apps"/>
                <Tab className={classes.navBarStyles}  value="Music" label="Music" aria-label="Music"/>
            </Tabs>
            {selectionState === "About" ? <About />: null}
            {selectionState === "Games" ? <Games /> : null}
            {selectionState === "Web" ? <Fade in={true} timeout={{enter: 4000, exit: 4000}}><Web /></Fade> : null}
            {selectionState === "Music" ? <Audio />: null}
        </div> 
    )
}

export default Navigate;