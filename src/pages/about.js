import React from'react'
import Layout from '../components/layout';
import TeamCard from '../components/TeamCard';
import team from '../data/team.json';


const AboutPage = () => {
    return(
        <Layout>
            <div className='about-page'>
                <h1>Our Team</h1>
                {team.map(member => (
                    // console.log(member)
                    <TeamCard name={member.name} picture='' role={member.role}/>
                ))}
            </div>
        </Layout>
    )
}

export default AboutPage