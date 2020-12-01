import React from 'react'
import Navbar from '../Navbar/Navbar'
import { CssBaseline } from '@material-ui/core'
import Header from "../Header/Header"
import ParticleEffect from "./ParticleEffect"
import { makeStyles } from '@material-ui/styles'




const Home = () => {

    
    return (
        <>  
            
            <Navbar/>
            <Header />
            <ParticleEffect />
            
        </>
    )
}

export default Home
