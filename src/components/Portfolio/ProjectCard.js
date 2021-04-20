import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Link} from "react-router-dom"

const useStyless = makeStyles({
  cardContainer: {
    maxWidth: 395,
    margin: "6rem auto",
    height: "auto",
  },
});

const ProjectCard = ({ images, description, name,to }) => {
  const classes = useStyless();
  return (
    <>
      <Card className={classes.cardContainer} elevation={55}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="project 1"
            height="200"
            image={images}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Typography>{description} </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" component={Link} to={to}>
              GitHub Repo
            </Button>
            <Button size="small" color="primary">
              Live Demo
            </Button>
          </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
