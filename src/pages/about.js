import React from'react'
import Layout from '../components/layout';
import TeamCard from '../components/TeamCard';
import team from '../data/team.json';
import{Grid} from '@material-ui/core';

const AboutPage = () => {
    return(
        <Layout>
            <div className='about-page'>
                <h1>Our Team</h1>
                <Grid container >
                    {team.map(member => (
                        <Grid item xs={12} sm={12} md={4} align='center'>
                            <TeamCard name={member.name} picture='' role={member.role}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>
    )
}

export default AboutPage