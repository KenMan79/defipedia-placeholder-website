import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const Navbar = () => {
    return(
        <AppBar position='static'>
            <Toolbar>
                <img src={'/assets/favicon.svg'} />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar