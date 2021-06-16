import { Box, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";

const SkillSection = ({images,webname,level}) => {
    const styles= useStyles()

  return (
    <Grid item xs={5} md={3} style={{width:"95%"}}>
      <Card rounded className={styles.center} style={{backgroundColor:'#17a2ff',color:"whitesmoke"}}>
        {/* <img src={`${images}`} alt="food icon" /> */}
        <Box rounded >
          <Typography  className={styles.skillname} style={{padding:"0.7rem", fontSize:"1.2rem"}}>{webname}</Typography>
           {/* {level} */}
        </Box>
      </Card>
    </Grid>
  );
};

export default SkillSection;
