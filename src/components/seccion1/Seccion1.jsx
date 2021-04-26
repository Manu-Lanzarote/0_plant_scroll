import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo1: {
        height: '100vh',
        backgroundColor: 'rgba(4, 107, 219, 0.3)',
    },
})

const Seccion1 = () => {
    const classes= useStyles();
    return (
        <div className={classes.fondo1}>  
            <h1>
                Seccion 1
            </h1>
        </div>
    )
}

export default Seccion1
