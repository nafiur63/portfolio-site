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
  Row,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyless = makeStyles({
  cardContainer: {
    maxWidth: 425,
    margin: "6rem auto",
    minHeight:400,
    // fontFamily:"serif"
    // height: "30vw",
  },
//   cardBox: {
//     background:"white",
//   }
});

const ProjectCard = ({ images, description, name, to }) => {
  const classes = useStyless();
  return (
    <>
      <Card className={classes.cardContainer} elevation={55}>
        <CardActionArea className={classes.cardBox}>
          <CardMedia
            component="img"
            alt="project 1"
            height="200"
            image={images}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" style={{fontFamily:"serif"}}>
              {name}
            </Typography>
            <Typography style={{fontFamily:"serif",fontSize:"1.2rem"}}>{description} </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justify="space-evenly">
            <Button
              size="small"
              variant="contained"
              color="primary"
              component={Link}
              to={to}
              style={{fontFamily:"serif",fontSize:"0.9rem"}}
            >
              GitHub Repo
            </Button>
            <Button size="small" variant="contained" color="primary" style={{fontFamily:"serif",fontSize:"0.9rem"}}>
              Live Demo
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
