import React from 'react'
import {Card, CardContent, Grid} from '@material-ui/core'

const TeamCard = (props) => {
    const {name, picture, role} = props
    return(
        <Card className='team-member-profile'>
            <CardContent>
                <p>{name}</p>
                <img 
                    alt='member-picture' 
                    src={'process.env.PUBLIC_URL  member.image'}
                />     
               <p>{role}</p>
            </CardContent>
        </Card>
    )
}

export default TeamCard