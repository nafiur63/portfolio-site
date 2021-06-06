import {
  Box,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import useStyles from "./Styles";
import nodejs from "../../images/nodejs.svg";

const Skills = () => {
  const webskillsets = [
    {
      Webname: "NodeJS",
      level: "Expert",
      images: nodejs,
    },
    {
      Webname: "NodeJS",
      level: "Expert",
      images: nodejs,
    },
    {
      Webname: "NodeJS",
      level: "Expert",
      images: nodejs,
    },
    {
      Webname: "NodeJS",
      level: "Expert",
      images: nodejs,
    },
    {
      Webname: "NodeJS",
      level: "Expert",
      images: nodejs,
    },
    {
      Webname: "NodeJS",
      level: "Expert",
      images: nodejs,
    },
  ];



  const mlskillsets = [
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
      ];

      const utilityskillsets = [
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
      ];

      const ipskillsets = [
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "NodeJS",
          level: "Expert",
          images: nodejs,
        },
      ];


  const styles = useStyles();
  return (
    <>
      <Navbar />
      <Box className={styles.maincontainer} textAlign="center">
        <Typography
          gutterBottom
          variant="h4"
          px="30rem"
          style={{ padding: "3rem 0", color: "#99c9ff" }}
        >
          My Skills
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            className={styles.skillbox}
            style={{ padding: "1rem 0", color: "#99c9ff" }}
          >


            <Box textAlign="center">
                    <Paper elevation={4} style={{backgroundColor:"inherit"}}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  Web Development Skills
                </Grid>
                {webskillsets.map((webskillset, key) => (
                  <Grid item xs={4} md={2}>
                    <Card rounded className={styles.center}>
                      <img src={webskillset.images} alt="food icon" />
                      <Box>
                        {webskillset.Webname} {webskillset.level}
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </Paper>
            </Box>


            <Box textAlign="center">
                    <Paper elevation={4} style={{backgroundColor:"inherit"}}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  Machine Learning Skills
                </Grid>
                {webskillsets.map((webskillset, key) => (
                  <Grid item xs={4} md={2}>
                    <Card rounded className={styles.center}>
                      <img src={webskillset.images} alt="food icon" />
                      <Box>
                        {webskillset.Webname} {webskillset.level}
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </Paper>
            </Box>


            <Box textAlign="center">
                    <Paper elevation={4} style={{backgroundColor:"inherit"}}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  Utility Skills
                </Grid>
                {webskillsets.map((webskillset, key) => (
                  <Grid item xs={4} md={2}>
                    <Card rounded className={styles.center}>
                      <img src={webskillset.images} alt="food icon" />
                      <Box>
                        {webskillset.Webname} {webskillset.level}
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </Paper>
            </Box>
            
            <Box textAlign="center" >
                    <Paper elevation={4} style={{backgroundColor:"inherit"}}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  Interpersonal Skills
                </Grid>
                {webskillsets.map((webskillset, key) => (
                  <Grid item xs={4} md={2}>
                    <Card rounded className={styles.center}>
                      <img src={webskillset.images} alt="food icon" />
                      <Box>
                        {webskillset.Webname} {webskillset.level}
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              </Paper>
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
