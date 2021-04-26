import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    fondo: {
        height: '100vh',
        backgroundColor: 'rgba(2, 133, 21, 0.3)'
    },
})

const Seccion5 = () => {
    const classes= useStyles();
    return (
        <div className={classes.fondo}>  
            <h1>
                Seccion 5
            </h1>     
        </div>
    )
}

export default Seccion5;