import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo: {
        height: '100vh',
        // backgroundColor: 'rgba(2, 133, 21, 0.6)'
    },
})

const Seccion5 = () => {
    const classes= useStyles();
    return (
        //id para llamarlo desde Lista.jsx para conseguir el scroll
        <div className={classes.fondo} id='sec5'>  
            <Typography variant="h1">
                Seccion 5
            </Typography>
        </div>
    )
}

export default Seccion5;