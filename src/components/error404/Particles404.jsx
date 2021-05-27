import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Particles from 'react-particles-js'

const useStyles = makeStyles ({
    particles:{
        backgroundColor: 'black',
        height: '92vh',
    },
    error: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    },
    parrafo: {
      width: '80vw',
    },
})

const Error404 = () => {
    const classes= useStyles();
    return (
        <div>
            <div className={classes.error}>
                <Typography variant="h1" color="primary">
                  ERROR 404
                </Typography>
                <Typography variant="body1" color="primary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
            </div>
           <Particles className={classes.particles}
                params={{
                    particles: {
                        number: {
                          value: 33,
                          density: {
                            enable: true,
                            value_area: 631.3193588162762
                          }
                        },
                        color: {
                          value: "#f6c14c"
                        },
                        shape: {
                          type: "circle",
                          stroke: {
                            width: 0,
                            color: "#000000"
                          },
                          polygon: {
                            nb_sides: 10
                          },
                          image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                          }
                        },
                        opacity: {
                          value: 0.2565451584617312,
                          random: false,
                          anim: {
                            enable: false,
                            speed: 0.32483187412764875,
                            opacity_min: 0.1,
                            sync: false
                          }
                        },
                        size: {
                          value: 24.0511086057873,
                          random: true,
                          anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                          }
                        },
                        line_linked: {
                          enable: true,
                          distance: 252.52774352651048,
                          color: "#ffffff",
                          opacity: 0.4,
                          width: 1
                        },
                        move: {
                          enable: true,
                          speed: 1.5,
                          direction: "none",
                          random: false,
                          straight: false,
                          out_mode: "out",
                          bounce: false,
                          attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                          }
                        }
                      },
                      interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: {
                            enable: true,
                            mode: "repulse"
                          },
                          onclick: {
                            enable: true,
                            mode: "push"
                          },
                          resize: true
                        },
                        modes: {
                          grab: {
                            distance: 400,
                            line_linked: {
                              opacity: 1
                            }
                          },
                          bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4
                          },
                          push: {
                            particles_nb: 4
                          },
                          remove: {
                            particles_nb: 2
                          }
                        }
                      },
                      retina_detect: true
                }}
           />
        </div>
    )
}

export default Error404
