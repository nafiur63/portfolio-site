import {makeStyles} from "@material-ui/core/styles"

export default makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position:"relative",
        padding:"1rem",
        margin:" 0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height:"100%",
            border: "1px solid #82e4ff",
            right:"40px",
            top:0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
    },
    timeLineItem: {
        padding:"1rem",
        borderBottom:"2px solid #82e4ff",
        position:"relative",
        margin:"1rem 3rem 6rem 1rem",
        clear:"both",
        "&:after": {
            content:"''",
            position:"absolute"
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            borderColor:"#82d8ff #82d8ff transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width:"44%",
            margin:"0rem 0rem 4rem 0rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem 1rem 4rem 2rem",
                borderColor: "#82e4ff"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left:"-0.625rem",
                borderColor:"transparent transparent #82d8ff #82d8ff"
            }
        }
    },
    timeLineYear: {
        textAlign:"center",
        maxWidth: "9.375rem",
        margin:"0 3rem 0 auto",
        fontSize: "1.8rem",
        background:"linear-gradient(to bottom right, #090979, #00d4ff)",
        color:"white",
        lineHeight: 1, 
        padding:" 1rem 0 1rem",
        "&:before":{
           display:"none" 
        },

        [theme.breakpoints.up("md")]: {
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before": {
                display:"none"
            }
        }
    },
    heading: {
        color:"#82d8ff",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))