import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectCard from './ProjectCard'
import { Grid } from '@material-ui/core'



const Portfolio = () => {
    return (
        <>
          <Navbar/>
          <Grid container justify='center' alignItems='center'>
              <Grid item xs={12} sm={8} md={6}>
              <ProjectCard />
              </Grid>
          </Grid>
            
        </>
    )
}



export default Portfolio
