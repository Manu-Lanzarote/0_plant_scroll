//Política de cookies. Instalado el paquete
//npm i react-cookie-consent
//Lo importo
import CookieConsent from 'react-cookie-consent'

// Importo Link de react-router-dom para hacer en enlace de "Más información"
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Cookies from '../footer/politicas/Cookies'

//Importo makeStyles en este componente para poder dar paddingLeft al texto de la cookie en función del tamaño del dispositivo ya que si no lo hago, este queda por debajo del menú cuando este está a la vista en pantalla grande.
import { makeStyles} from '@material-ui/core/styles';

//Los estilos del paquete cookie-consent no admiten puntos de ruptura, por eso  los creo aquí.
const useStyles = makeStyles((theme) => ({
    enlace: {
      color: '#ffffffbe',
      textDecoration: 'none',
      paddingLeft: '4px',
      display: 'inline-block',
    },
    estilos: {
        [theme.breakpoints.up('sm')]:{
            paddingLeft: theme.spacing(28),
            paddingTop: theme.spacing(3),
          },
    },
  }));


const AvisoCookies = () => {
    const classes= useStyles();
    return (
            <CookieConsent
            //Configuraciones que se pueden hacer con los Props del módulo

            /////////////////////////////////////////////////////////////////
            //OJO!!!: Don't forget to remove the debug-property for production.
              debug={true}
            ////////////////////////////////////////////////////////////////

              buttonText='Aceptar'
              expires={365}
              overlay={true}
              overlayStyle={{backgroundColor: 'transparent'}}
              contentStyle={{margin: '3px 2rem', marginBottom: '2rem'}}
              buttonStyle={{margin: ' 1rem 2rem', padding: '10px',fontSize: '16px'}}
              style={{backgroundColor: '#111111'}}
            >
                <div className={classes.estilos} >
                Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web. Si continúa utilizando este sitio asumiremos que está de acuerdo.
                <Router>
                  <Link to='/cookies-page' className={classes.enlace} >
                    <Cookies/>
                  </Link>
                </Router>
                </div>
            </CookieConsent>
    )
}

export default AvisoCookies;
