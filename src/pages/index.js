import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
      <div className='index-page'>
        <img src={'/assets/brand-logo.svg'} alt='brand-logo' />
        <p>Decode you path to open finance</p>
      </div>
    </Layout>
  )
}

export default IndexPage
