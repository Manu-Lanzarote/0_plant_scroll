import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Lista from './Lista';

import escudo from '../imagenes/escudo_aviles.png'
import logo from '../imagenes/logo_lesmes_azul.png'

const drawerWidth = 220;

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
    backgroundColor: '#FBFBFB',
    // Color de la bandera de Avilés
    color: '#0446ad',
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
    color: '#0446ad',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  telefono: {
    color: '#0446ad',
    textDecoration: 'none',
    fontWeight: '400',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#FBFBFB',
    boxShadow: '3px 0px 3px 0px rgba(50, 50, 50, 0.3)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  escudo: {
    width: '4rem',
    margin: '5px 78px',
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
    paddingTop: '30px',
    color: '#0446ad',
    textAlign: 'center',
    padding: '10px',
  },
  phone: {
    border: '1px solid',
    display: 'inline-block',
    padding: '18px',
    borderRadius: '50%',
    backgroundColor: '#0446ad',
    color: 'white',
    width:'4rem',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
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
        <img src={escudo} alt="Escudo de Avilés" className={classes.escudo}/>
      <Lista/>
      <Divider/>
      <div className={classes.footer}>
        <h3>LESMES ABOGADOS</h3>
        <br/>
        <address>C/ Francisco Orejas 1, 1º Izqda. CP:33401 Avilés (Asturias)</address>
        <p>Tfno: 985 561 169</p>
        <br/>
        <p>info@lesmesabogados.com</p>
        <br/><br/>
            <a href="tel:+34985561169" className={classes.phone}>
              <PhoneInTalkIcon />
            </a>
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
            <MenuIcon style={{ fontSize: 30 }}/>
          </IconButton>
            <img src={logo} alt='Logotipo Lesmes Abogados' className={classes.logo}/>
            <span className={classes.tipografia}>SU BUFETE DE ABOGADOS EN AVILÉS</span>
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