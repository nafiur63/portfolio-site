import {makeStyles} from "@material-ui/core/styles"


export default makeStyles(theme => ({
    box:{
       height:'100%',
    },    
    paper:{
        // position:'absolute',
        // top:'50%',
        // left:'50%',
        // width:'50%',
        // height:'50%',
        // textAlign:'center'
        backgroundColor:'blue',
    },
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    heading: {
        color:"#99c9ff",
        padding: "3rem 0",
        textTransform: "uppercase",
        fontWeight:"bolder",
        fontFamily:"Lucida Console"
    },
    maincontainer:{
        height:'100%',
    },
    skillbox:{
        // width:'50%',
        // height:'50%',
    }
}))