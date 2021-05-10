import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo: {
        height: '100vh',
        backgroundColor: 'rgba(42, 1, 98, 0.3)'
    },
})

const Seccion3 = () => {
    const classes= useStyles();
    return (
        //id para llamarlo desde Lista.jsx para conseguir el scroll
        <div className={classes.fondo} id='sec3'>  
            <Typography variant="h1">
                Seccion 3
            </Typography>
        </div>
    )
}

export default Seccion3;