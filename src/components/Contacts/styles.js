import {makeStyles} from "@material-ui/core/styles"


export default makeStyles(theme => ({
    tabs:{
        // marginRight:"2rem",
        // marginTop:"2rem",
        margin:"auto",
        marginBottom:"3rem",
    },
    contactbox:{
        height: 120,
        paddingTop:"16%",
    },
    root: {
        "&.MuiSvgIcon-root": {
            fill:"white",
            "&:hover": {
                fill:"tomato",
                fontSize:"2rem"
            }
        }
    }
}))