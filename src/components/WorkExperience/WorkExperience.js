import React from "react";
import { Typography, Box } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import useStyles from "./styles";

const WorkExperience = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" align="center" className={classes.subHeading}>
              Content Writer
              </Typography>
              <Typography variant="body1" align="center" style={{color:"tomato"}}>
              ClippingUSA
              </Typography>
              <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
              Writing English articles on various topics for the official website and other purposes.
              </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" align="center" className={classes.subHeading}>
              Content Writer
              </Typography>
              <Typography variant="body1" align="center" style={{color:"tomato"}}>
              ClippingUSA
              </Typography>
              <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
              Writing English articles on various topics for the official website and other purposes.
              </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" align="center" className={classes.subHeading}>
              Content Writer
              </Typography>
              <Typography variant="body1" align="center" style={{color:"tomato"}}>
              ClippingUSA
              </Typography>
              <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
              Writing English articles on various topics for the official website and other purposes.
              </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h5" align="center" className={classes.subHeading}>
              Content Writer
              </Typography>
              <Typography variant="body1" align="center" style={{color:"tomato"}}>
              ClippingUSA
              </Typography>
              <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
              Writing English articles on various topics for the official website and other purposes.
              </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WorkExperience;
