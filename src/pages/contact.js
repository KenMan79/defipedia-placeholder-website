import React from 'react';
import Layout from '../components/layout';
import {Paper, TextField, Button} from '@material-ui/core'

const ContactPage = () => {
    return(
        <Layout>
            <Paper className='contact-form-container' elevation={3}>
                <h2>Get in Touch</h2>
                <form>
                    <TextField label='Full Name' variant='outlined' />
                    <TextField label='Email' variant='outlined' />
                    <textarea placeholder='Enter your message....'/>
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                    <hr />
                    <section className='social-media-handle'>
                        <i class="fab fa-discord"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github-square"></i>
                        <i class="fab fa-telegram"></i>
                        <i class="fab fa-medium"></i>
                    </section>
                </form>
            </Paper>
        </Layout>
    )
}

export default ContactPage