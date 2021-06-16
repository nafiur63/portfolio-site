import React from "react";
import Navbar from "../Navbar/Navbar";
import ProjectCard from "./ProjectCard";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import bcimg from "../../images/bcimg2.jpg"
import Grow from '@material-ui/core/Grow';

const portfolioProjects = [
  {
    name: "E-Shop",
    description:
      "A full responsive e-commerce app built with NodeJS (Express), ReactJS, MongoDB, Bootstrap. Extra features: Redux cart system, User authentication, payment methods. ",
    images: bcimg,
    to:"git-project-eshop"
  },
  {
    name: "Journals",
    description:
      "A responsive MERN stack journal app for storing memories and events for sharing among users. Similar to social media app where users can also like and comment on journals created by others.",
    images: bcimg,
    to:"git-project-journal"
  },
  {
    name: "Chat App",
    description:
      "A chat application built with NodeJS (Express), ReactJS, MongoDB, Material-Ui, SocketIO. Multiple users can join on different chatrooms and communicate with each other.",
    images: bcimg,
    to:"git-project-chat"
  },
  {
    name: "Course Advising System",
    description:
      "A course advising system for students in a university. Built with Express, ejs and MongoDB.",
    images: bcimg,
    to:"git-project-course"
  },
];

const useStyless = makeStyles({
  mainContainer: {
    height: "100%",
  },
});

const Portfolio = () => {
  const classes = useStyless();
  return (
    <>
    <Navbar />
      <Box component="div" className={classes.mainContainer}>
        
        <Grow in timeout={1250}>
        <Grid container >
          {portfolioProjects.map((portfolioProject,key) => (
            <Grid item xs={12} sm={8} md={6}>
              <ProjectCard
                name={portfolioProject.name}
                description={portfolioProject.description}
                images={portfolioProject.images}
                to={portfolioProject.to}
                key={key}
              />
            </Grid>
          ))}
        </Grid>
        </Grow> 
      </Box>
    </>
  );
};

export default Portfolio;
