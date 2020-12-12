import {makeStyles} from "@material-ui/core/styles"


export default makeStyles(theme => ({
    avatar: {
        width: theme.spacing(25),
        height:theme.spacing(25),
        margin: theme.spacing(1)
    },
    title:{
        color:"#99ccff"
    },
    subtitle: {
        color:"#4dd2ff",
        marginBottom:"3rem"
    },
    typedContainer: {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}))