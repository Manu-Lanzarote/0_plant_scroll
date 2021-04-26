import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo: {
        height: '100vh',
    },
})

const Seccion4 = () => {
    const classes= useStyles();
    return (
        <div className={classes.fondo}>  
            <h1>
                Seccion 4
            </h1>     
        </div>
    )
}

export default Seccion4;