import React from 'react'
import {Link} from 'gatsby'

const IndexPage = () => {
  return(
    <React.Fragment>
      <h1>DeFipedia</h1>
      <Link to='/about'>About</Link>
      <Link to='contact'>Contact</Link>
    </React.Fragment>
  )
}

export default IndexPage
