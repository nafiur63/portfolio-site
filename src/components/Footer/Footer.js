import React from 'react'
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import {makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"


const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill:"white",
            "&:hover": {
                fill:"tomato",
                fontSize:"2rem"
            }
        }
    }
})

const Footer = () => {
    const classes= useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "#3333ff"}}>
            <BottomNavigationAction
            className={classes.root}
            component={Link}
            to={"githubpage"}
                style={{padding: 0}}
                icon={<GitHubIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
            component={Link}
            to={"linkedin"}
                style={{padding: 0}}
                icon={<LinkedInIcon/>}
            />
            <BottomNavigationAction
            className={classes.root}
                style={{padding: 0}}
                icon={<MailIcon/>}
            />
        </BottomNavigation>
    )
}

export default Footer
