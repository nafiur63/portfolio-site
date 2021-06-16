import React from "react";
import { Typography, Box } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import useStyles from "./styles";

const Educaton = () => {
    const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Bachelor of Science
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#4ac6ff",fontFamily:"serif",fontWeight:"bolder"  }}
            >Copmuter Science & Engineering
            <br></br>CGPA - 3.30/4.0 
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan",fontFamily:"serif",fontWeight:"bolder"  }}
            >
               East West University
               <br></br> Dhaka, Bangladesh
               
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Higher Secondary Certificate
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#4ac6ff",fontFamily:"serif",fontWeight:"bolder"  }}
            >Science
            <br></br>GPA 5.0/5.0
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan",fontFamily:"serif",fontWeight:"bolder"  }}
            >
              Milestone College
              <br></br> Dhaka, Bangladesh
              
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Secondary School Certificate
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#4ac6ff",fontFamily:"serif",fontWeight:"bolder"  }}
            >Science   
            <br></br>GPA 5.0/5.0        
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan",fontFamily:"serif",fontWeight:"bolder" }}
            >
              Milestone College
              <br></br>Dhaka, Bangladesh
              
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Educaton;
