import React from "react";
import Navbar from "../Navbar/Navbar";
import ProjectCard from "./ProjectCard";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import bcimg from "../../images/bcimg2.jpg"

const portfolioProjects = [
  {
    name: "MERN E-Shop",
    description:
      "A full responsive e-commerce app built with NodeJS (Express), ReactJS, MongoDB, Bootstrap. Extra features: Redux cart system, User authentication, payment methods. ",
    images: bcimg,
    to:"git-project1"
  },
  {
    name: "MERN Chat App",
    description:
      "A chat application built with NodeJS (Express), ReactJS, MongoDB, Material-Ui",
    images: bcimg,
  },
  {
    name: "MERN Journals",
    description:
      "A responsive journal app for storing precious memories and events for sharing among users. Similar to social media app where users can also like and comment on journals created by others",
    images: bcimg,
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
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          {portfolioProjects.map((portfolioProject) => (
            <Grid item xs={12} sm={8} md={4}>
              <ProjectCard
                name={portfolioProject.name}
                description={portfolioProject.description}
                images={portfolioProject.images}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
