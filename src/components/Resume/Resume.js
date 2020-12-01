import React from 'react'
import {Typography,Box} from "@material-ui/core"
import Navbar from "../Navbar/Navbar"
import useStyles from "./styles"


const Resume = () => {
    const classes= useStyles()
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center">
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={classes.timeLineYear}>2013</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Resume
