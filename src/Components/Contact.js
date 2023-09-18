import ContactPic from './Images/ContactPic.jpg'
import './Contact.css'
import React from 'react'
import TextField from '@mui/material/TextField';
import Nav from './Nav'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact(){
    return(
        <>
            <Nav/>
            <div className='contact-container'>
                <div className='contact-left'>
                    <img src={ContactPic} style={{width: '100%', height:'100%'}} />
                </div>
                <div className='contact-right'>
                    <p style={{fontSize: '30px', fontWeight: 'bold', color: '#001d3d', alignSelf: 'center'}}>Get in touch <ContactMailIcon style={{transform: 'translateY(4px)'}} fontSize='34px'/></p>
                    <div style={{display: 'flex', justifyContent:'space-between', marginTop:'20px'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={7}
                        style={{marginTop: '20px'}}
                    />
                    <Button variant="outlined" endIcon={<EmailIcon />} style={{marginTop: '20px', color: '#e3a90e', border: '#e3a90e 1px solid', width: '210px', alignSelf: 'flex-end'}} > Send </Button>
                </div>
            </div>
        </>
    )
}