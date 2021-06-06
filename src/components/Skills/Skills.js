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
import SkillSection from "./SkillSection";

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
          Webname: "Python",
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
          Webname: "GitHub",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "MS Office Suite",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Netlify",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Heroku",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Oracle Apex",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "AWS",
          level: "Expert",
          images: nodejs,
        },
      ];

      const ipskillsets = [
        {
          Webname: "Leadership",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Critical Thinking",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Communication",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Team Management",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Presentation",
          level: "Expert",
          images: nodejs,
        },
        {
          Webname: "Public Speaking",
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
                <Grid item xs={12} style={{color:'white'}}>
                  Machine Learning Skills
                </Grid>
                {webskillsets.map((webskillset, key) => (
                //   <Grid item xs={4} md={2}>
                //     <Card rounded className={styles.center}>
                //       <img src={webskillset.images} alt="food icon" />
                //       <Box>
                //         {webskillset.Webname} {webskillset.level}
                //       </Box>
                //     </Card>
                //   </Grid>
                <SkillSection webname={webskillset.Webname} level={webskillset.level} images={webskillset.images}/>
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
                {ipskillsets.map((ipskillset, key) => (
                  <Grid item xs={4} md={2}>
                    <Card rounded className={styles.center}>
                      <img src={ipskillset.images} alt="food icon" />
                      <Box>
                        {ipskillset.Webname} {ipskillset.level}
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
                  Utility Skills
                </Grid>
                {utilityskillsets.map((webskillset, key) => (
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
