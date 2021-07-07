import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

//Iconos
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Lista from './Lista';

import logo from '../imagenes/logo_lesmes_blanco.png'

//importación del scroll. Cambio al nombre al componente Link como LinkScroll por que este nombre coincide con el componente Link de react-router
import {Link as LinkScroll} from 'react-scroll'

//Importación de los componentes para hacer el enrutamiento
import {BrowserRouter as Router, Link} from 'react-router-dom'

const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#111111',
    // Color de la bandera de Avilés
    // color: '#0446ad',
    color: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navegacion: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
   tipografia: {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  telefono: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '400',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#111111',
    boxShadow: '2px 0px 2px 0px rgba(0, 50, 50, 0.7)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    height: '3.5rem',
    // objectFit nos asegura que la imagen no se va a deformar
    objectFit: 'contain',
    // Manita sobre el logo
    '&:hover':{
      cursor: 'pointer',
    },
  },
  footer: {
    color: '#ffffff',
    textAlign: 'center',
    padding: '11px',
  },
  phone: {
    border: '1px solid',
    display: 'inline-block',
    padding: '8px 10px',
    borderRadius: '50%',
    backgroundColor: '#0446ad',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  redes: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconos_redes: {
    color: '#ffffff',
    padding: '1.2rem 0.5rem',
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <Lista/>
      <Divider/>
      <div className={classes.footer}>
        <h3>LESMES ABOGADOS</h3>
        <address>C/ Francisco Orejas 1, 1º Izqda. CP:33401 Avilés (Asturias)</address>
        <p>Tfno: 985 561 169</p>
        <p>info@lesmesabogados.com</p>
        <br/>
            <a href="tel:+34985561169" className={classes.phone}>
              <PhoneInTalkIcon />
            </a>
      </div>
      <br/>
      <Divider/>
      <div className={classes.redes}>
        <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className={classes.iconos_redes}><FacebookIcon fontSize="large"/></a>
        <a href='https://www.instagram.com' target='_blank' rel='noreferrer' className={classes.iconos_redes}><InstagramIcon fontSize="large"/></a>
        <a href='https://www.youtube.com' target='_blank' rel='noreferrer' className={classes.iconos_redes}><YouTubeIcon fontSize="large"/></a>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.navegacion}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{ fontSize: 40 }}/>
          </IconButton>
          {/* Link: Enlace para hacer smooth scroll en el logotipo de la barra de navegación*/}
          <LinkScroll
                    activeClass="active"
                    to="sec1"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={600}
                >
                  <Router>
                    <Link to='/'><img src={logo} alt='Logotipo Lesmes Abogados' className={classes.logo}/>
                    </Link>
                  </Router>
            </LinkScroll>
            <span className={classes.tipografia}>AVILÉS - ASTURIAS</span>
            <a href="tel:+34985561169" className={classes.telefono}>Tfno: 985 561 169</a>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;