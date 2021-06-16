import React from 'react'
import {TextField, Typography, Button, Grid, Box, Slide, Paper, Container} from "@material-ui/core"
import {SendIcon} from "@material-ui/icons/Send"
import Navbar from "../Navbar/Navbar"
import { GitHub, LinkedIn, Mail } from '@material-ui/icons'
import {Link} from "react-router-dom"
import useStyles from "./styles"

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';


const Contacts = () => {
    const classes= useStyles()
    return (
        <>
        <Navbar/>
        <Container>
        <h1 style={{color:"#99c9ff",marginTop:"4rem",marginBottom:"5rem",textAlign:"center",fontWeight:"bolder",fontSize:"3rem"}}>You can contact me through these</h1>
        <Grid container>
            <Grid item xs={12} md={3} component={Link}  to={"linkedin"} className={classes.tabs} style={{textDecoration: 'none'}}>
            <Slide in direction="left" timeout={800}>
                <Paper elevation="10" align="center" className={classes.contactbox}>
                    <LinkedInIcon align="center" style={{fontSize:"4rem", fontFamily:"serif"}} />
                    <Typography style={{ fontFamily:"serif",fontSize:"1.2rem"}}>www.linkedin.com/in/md-nafiur-reza/</Typography>
                </Paper>
            </Slide>
            </Grid>
            <Grid item xs={12} md={3}  component={Link} className={classes.tabs} style={{textDecoration: 'none'}}>
            <Slide in direction="left"  timeout={1400}>
                <Paper elevation="10" align="center" className={classes.contactbox}>
                    <MailIcon style={{fontSize:"4rem"}}/>
                    <Typography style={{ fontFamily:"serif",fontSize:"1.3rem"}}>nafiur63@gmail.com</Typography>
                </Paper>
            </Slide>
            </Grid>
            <Grid item xs={12} md={3}  component={Link} to={"github"} className={classes.tabs} style={{textDecoration: 'none'}}>
            <Slide in direction="left" timeout={2000}>
                <Paper elevation="10" align="center" className={classes.contactbox}>
                    <GitHubIcon style={{fontSize:"4rem"}}/>
                    <Typography style={{ fontFamily:"serif",fontSize:"1.3rem"}}>github.com/nafiur63</Typography>
                </Paper>
            </Slide>
            </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Contacts
