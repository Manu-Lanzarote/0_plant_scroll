import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo: {
        height: '100vh',
        backgroundColor: 'rgba(67, 0, 0, 0.8)',
    },
})

const Seccion4 = () => {
    const classes= useStyles();
    return (
        //id para llamarlo desde Lista.jsx para conseguir el scroll
        <div className={classes.fondo} id='sec4'>  
            <Typography variant="h1">
                Seccion 4
            </Typography>    
        </div>
    )
}

export default Seccion4;