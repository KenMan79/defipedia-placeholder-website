import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import {Link} from 'gatsby'

const Navbar = () => {
    return(
        <AppBar position='static'>
            <Toolbar>
                <Link to='/'>
                    <img src={'/assets/favicon.svg'} />
                </Link>
                <ul className='nav-options'>
                    <li className='nav-option'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='nav-option'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar