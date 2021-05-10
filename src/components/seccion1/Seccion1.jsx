import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

//Importación de imágenes
import imagen from './pen-731199_1280.jpg'

const useStyles = makeStyles ({
    seccion: {
        maxWidth: '100vw',
        height: '100vh',
        backgroundImage: `url(${imagen})`,
    },
    main: {
        height: '100%',
        paddingTop: '15%',
        paddingLeft: '20%',
        paddingRight: '10%',
        color: 'white',
    },
    caja: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '50px',
    }
})

const Seccion1 = () => {
    const classes= useStyles();
    return (
        //id para llamarlo desde Lista.jsx para conseguir el scroll
        <div id='sec1' className={classes.seccion}>
            <main className={classes.main}>
            <div className={classes.caja}>
                <Typography variant="h1" color="primary">
                    Seccion 1
                </Typography>
                <br/>
                    <Typography variant='body1' color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum exercitationem vero fuga? Consectetur nam non distinctio voluptatibus neque, magnam sequi, in fuga ut dolorem quasi nulla odio possimus? Temporibus!</Typography>
            </div>
            </main>
        </div>
    )
}

export default Seccion1
