import React from 'react'
import Particles from "react-particles-js"
import { makeStyles } from '@material-ui/styles'
import zIndex from '@material-ui/core/styles/zIndex'


const useStyles = makeStyles({
    particlesCanvas: {
        position: "fixed",
        height:"100vh",
        opacity:"0.7"
    }
})


const ParticleEffect = () => {
    const classes= useStyles()
    return (
        <>
        <Particles canvasClassName= {classes.particlesCanvas}
            params={{
                particles:{
                    number:{
                        value:250,density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape: {
                        type:"circle",
                        stroke: {
                            width:1,
                            color:"tomato"
                        }
                    },
                    size: {
                        value:8,
                        random:true,
                        anim: {
                            enable:true,
                            speed:10,
                            size_min:0.1,
                            sync:true
                        }
                    }
                }
            }} />
        </>
    )
}

export default ParticleEffect
