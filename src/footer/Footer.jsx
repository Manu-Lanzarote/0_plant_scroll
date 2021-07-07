import { Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Cookies from './politicas/Cookies';
import Legal from './politicas/Legal';
import Privacidad from './politicas/Privacidad';

//Enrutamiento
import {BrowserRouter as Router, Link} from 'react-router-dom'

//Estilos CSS
const useStyles = makeStyles(theme => ({
    footer: {
        textAlign: 'center',
        padding: theme.spacing(1.5),
        [theme.breakpoints.up('sm')]:{
        paddingLeft: theme.spacing(10),
        },
        backgroundColor: '#111111',
    },
    politicas: {
        display: 'flex',
        justifyContent: 'center',
        
    },
    enlaces: {
        textDecoration: 'none',
        color: '#ffffffbe',
        fontSize: '0.9rem',
        padding: '3px 6px',

    },
  }))

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
                <Typography variant="body2" color="primary">
                    @{new Date().getFullYear()} Lesmes Abogados - Todos los derechos reservados
                </Typography>
                <Router>
                    <div className={classes.politicas}>
                        <Link to='/aviso_legal' className={classes.enlaces}><Legal/></Link>
                        <Link to='/politica_de_cookies'  className={classes.enlaces}><Cookies/></Link>
                        <Link to='/politica_de_privacidad'  className={classes.enlaces}><Privacidad/> </Link>
                    </div>
                </Router>
        </div>
    )
}

export default Footer
