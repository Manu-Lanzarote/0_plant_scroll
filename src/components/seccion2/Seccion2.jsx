import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo: {
        height: '100vh',
        backgroundColor: 'rgba(7, 0, 0, 0.6)',
    },
    contenido: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
})

const Seccion2 = () => {
    const classes= useStyles();
    return (
        //id para llamarlo desde Lista.jsx para conseguir el scroll
        <div className={classes.fondo} id='sec2'>  
            <div className={classes.contenido}>
                <Typography variant="h1" color="initial">
                    Seccion 2
                </Typography>
            </div>
        </div>
    )
}

export default Seccion2;