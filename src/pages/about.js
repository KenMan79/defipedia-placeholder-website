import React from'react'
import Layout from '../components/layout';
import TeamCard from '../components/TeamCard';

const AboutPage = () => {
    return(
        <Layout>
            <div className='about-page'>
                <h1>Our Team</h1>
                <TeamCard name='Joseph Turner' picture='' role='Cheif Execution Officer'/>
            </div>
        </Layout>
    )
}

export default AboutPage