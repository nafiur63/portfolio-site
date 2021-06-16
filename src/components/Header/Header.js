import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import avatar from "../../images/icon.jpg"
import Typed from "react-typed"
import useStyles from "./styles"




const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Nafiur Reza" />
            </Grid>
            <Typography className={classes.title} variant="h3">
                <Typed style={{fontFamily:"serif"}} strings={["Md Nafiur Reza"]} typeSpeed={130} />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed style={{fontFamily:"serif"}} strings={["Software Engineer","Full Stack Web Developer"]} typeSpeed={80} backSpeed={65} loop/>
            </Typography>
        </Box>
    )
}

export default Header
