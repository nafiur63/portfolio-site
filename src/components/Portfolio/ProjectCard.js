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

import img1 from "../../images/bcimg2.jpg"

const ProjectCard = () => {
  return <>
    <Card>
        <CardActionArea>
            <CardMedia component="img" 
            alt = "project 1"
            height = "140"
            image={img1}/>
            <CardContent>
                <Typography variant="h5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias inventore temporibus vero officia excepturi fugit facere dolore repellat odio illum minus neque voluptates doloremque, veritatis ullam provident suscipit nihil!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>
                    Share
                </Button>
                <Button size='small' color='primary'>
                    Live Demo
                </Button>
            </CardActions>
        </CardActionArea>
    </Card>
  </>;
};

export default ProjectCard;
