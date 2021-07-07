//Importaciones para construir la lista
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//Importaciones de los iconos 
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import GavelIcon from '@material-ui/icons/Gavel';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

//importación del scroll. Cambio al nombre al componente Link como LinkScroll por que este nombre coincide con el componente Link de react-router
import {Link as LinkScroll} from 'react-scroll'

//Importación de Link para hacer el enrutamiento. No necesito importar el componente principal, BrowserRouter as Router aquí ya que lo tengo importado y envolviendo App en index.js
import {NavLink} from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles'


//Estilos CSS
const useStyles = makeStyles(theme => ({
    list: {
        color: '#ffffff',
        paddingLeft: '0.7rem',
    },
  }))

const Lista = () => {
    const classes = useStyles();
    return (
        <>
            <List component="nav" aria-label="main mailbox folders" className={classes.list} >
                {/* Link: Enlace para hacer smooth scroll */}
                    <LinkScroll
                        activeClass="active"
                        to="sec1"
                        spy={true}
                        smooth={true}
                        offset={-55}
                        duration={600}
                    >
                        <NavLink exact activeClassName='active' to='/' className={classes.enlace}>
                        <ListItem button>
                            <ListItemIcon className={classes.list} id="seccion1">
                                <HomeIcon/>
                            </ListItemIcon >
                            <ListItemText primary="Home" />
                            </ListItem>
                        </NavLink>
                    </LinkScroll>
                {/* Link: Enlace para hacer smooth scroll */}
                <LinkScroll
                    activeClass="active"
                    to="sec2"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={600}
                >
                {/* Enrutamiento */}
                <NavLink exact activeClassName='active' to='/seccion2' className={classes.enlace}>
                   <ListItem button>
                        <ListItemIcon className={classes.list} id="seccion2">
                            <AccountBalanceIcon/>
                         </ListItemIcon>
                    <ListItemText primary="Sección 2"/>
                    </ListItem>
                </NavLink>
                </LinkScroll>
                {/* Link: Enlace para hacer smooth scroll */}
                <LinkScroll
                    activeClass="active"
                    to="sec3"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={600}
                >
                {/* Enrutamiento */}
                <NavLink exact activeClassName='active' to='/seccion3' className={classes.enlace}>
                    <ListItem button>
                        <ListItemIcon className={classes.list} id="seccion3">
                            <HowToRegIcon/>
                        </ListItemIcon>
                    <ListItemText primary="Sección 3"/>
                    </ListItem>
                </NavLink>
                </LinkScroll>
                {/* Link: Enlace para hacer smooth scroll */}
                <LinkScroll
                    activeClass="active"
                    to="sec4"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={600}
                >
                {/* Enrutamiento */}
                <NavLink exact activeClassName='active' to='/seccion4' className={classes.enlace}>
                    <ListItem button>
                        <ListItemIcon className={classes.list} id="seccion4">
                            <GavelIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Sección 4"/>
                    </ListItem>
                </NavLink>
                </LinkScroll>
                {/* Link: Enlace para hacer smooth scroll */}
                <LinkScroll
                    activeClass="active"
                    to="sec5"
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={600}
                >   
                {/* Enrutamiento */}
                <NavLink exact activeClassName='active' to='/contacto' className={classes.enlace}>
                    <ListItem button>
                        <ListItemIcon className={classes.list} id="seccion5">
                            <PhoneInTalkIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Contacto"/>
                    </ListItem>
                </NavLink>
                </LinkScroll>
            </List>
        </>
    )
}

export default Lista;