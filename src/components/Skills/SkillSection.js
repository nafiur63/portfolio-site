import { Box, Card, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";

const SkillSection = ({images,webname,level}) => {
    const styles= useStyles()

  return (
    <Grid item xs={4} md={2}>
      <Card rounded className={styles.center}>
        <img src={`${images}`} alt="food icon" />
        <Box>
          {webname} {level}
        </Box>
      </Card>
    </Grid>
  );
};

export default SkillSection;
