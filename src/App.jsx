//Importaciones relacionadas con estilos. CssBaseLine nos sirve para normalizar el css. El componente <CssBaseline> va debajo de <ThemeProvider> dentro del return.

// ThemeProvider nos sirve para personalizar los estilos generales que neccesitamos para nuestro proyecto en concreto, (colores primario, secundario, tamaños de typografía, etc).

//El componente theme lo usaremos para guardar todos los estilos generales
import { CssBaseline} from '@material-ui/core';
import {ThemeProvider} from  '@material-ui/core/styles'

import theme from './themeConfig'

//makeStyles  nos sirve para insertar los estilos dentro de cada componente
import {makeStyles} from '@material-ui/core/styles'

//Política de Cookies
import AvisoCookies from './components/AvisoCookies'

//imagen de fondo
import fondo from './imagenes/fondo2.jpg'

//Navegación
import ResponsiveDrawer from './appbar/ResponsiveDrawer';

import Seccion1 from './components/seccion1/Seccion1';
import Seccion2 from './components/seccion2/Seccion2'
import Seccion3 from './components/seccion3/Seccion3';
import Seccion4 from './components/seccion4/Seccion4';
import Seccion5 from './components/seccion5/Seccion5';

//Componente error 404 con fondo de partículas que por el momento no puedo usar en este proyecto por que no veo como hacerlo con react-scroll.. 
// import Particles404 from './components/error404/Particles404'

import Footer from './footer/Footer';
import Video404 from './components/error404/Video404';
import Hero from './components/hero/Hero';

//Importación del objeto dataSlider que contiene los sliders
import { dataSlider } from './components/hero/dataSlider';
// import ListaPrueba from './components/prueba/ListaPrueba';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]:{
      paddingLeft: theme.spacing(28),
    },
    backgroundImage: `url(${fondo})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '-100',
  },
}));

function App() {
  const classes= useStyles();
  return (
        <ThemeProvider theme={theme} >
          {/* CssBaseLine normaliza el css */}
          <CssBaseline/>
          <ResponsiveDrawer/>
          <div className={classes.content} >
              <div className={classes.toolbar}/>
                  <Hero slides={dataSlider} />
                  <Seccion1/>
                  <Seccion2/>
                  <Seccion3/>
                  <Seccion4/>
                  <Seccion5/>
                  {/* <ListaPrueba/> */}
                  {/* CHEQUEAR POR QUE EL COMPONENTE PARTÍCULAS ME SOBREPASA EL MARGEN DE LA WEB Y ME ROMPE EL RESPONSIVE. Comparar con otros componentes  */}
                  {/* <Particles404/> */}
                  <Video404/>
                <footer>
                  <Footer/>
                </footer>
          </div>
          <AvisoCookies/>
        </ThemeProvider>
  );
}

export default App;
