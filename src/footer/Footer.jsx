import {makeStyles} from '@material-ui/core/styles'
import Cookies from './politicas/Cookies';
import Legal from './politicas/Legal';
import Privacidad from './politicas/Privacidad';
// import fondoFooter from '../imagenes/fondo_footer.jpg'

//Estilos CSS
const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: 'center',
        backgroundColor: '#FBFBFB',
        padding: theme.spacing(1.5),
        [theme.breakpoints.up('sm')]:{
        paddingLeft: theme.spacing(28),
    },
        // backgroundImage: `url(${fondoFooter})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
    },
    politicas: {
        display: 'flex',
        justifyContent: 'center',
    },
  }))

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
                <p style={{fontSize: '0.8rem'}}>
                    ©2021 Lesmes Abogados - Todos los derechos reservados
                </p>
                <div className={classes.politicas}>
                    <Legal/>
                    <Cookies/>
                    <Privacidad/>
                </div>
        </div>
    )
}

export default Footer
