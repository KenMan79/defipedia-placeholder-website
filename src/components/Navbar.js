import React from 'react'
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Navbar = () => {
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>DeFipedia</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar