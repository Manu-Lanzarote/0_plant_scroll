import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo: {
        height: '100vh',
    },
})

const Seccion2 = () => {
    const classes= useStyles();
    return (
        <div className={classes.fondo}>  
            <h1>
                Seccion 2
            </h1>     
        </div>
    )
}

export default Seccion2;