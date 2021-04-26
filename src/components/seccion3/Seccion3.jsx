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
        <div className={classes.fondo}>  
            <h1>
                Seccion 3
            </h1>     
        </div>
    )
}

export default Seccion3;