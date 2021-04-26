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

//importación del scroll
import {Link, animateScroll as scroll} from 'react-scroll'

import {makeStyles} from '@material-ui/core/styles'


//Estilos CSS
const useStyles = makeStyles(theme => ({
    list: {
        color: '#0446ad',
        paddingLeft: '0.7rem',
    },
  }))

const Lista = () => {
    const classes = useStyles();
    return (
        <>
            <List component="nav" aria-label="main mailbox folders" className={classes.list} >
                <Link to="">
                    <ListItem button>
                        <ListItemIcon className={classes.list} id="seccion1">
                            <HomeIcon/>
                        </ListItemIcon >
                        <ListItemText primary="Sección 1"/>
                    </ListItem>
                </Link>
                <ListItem button>
                    <ListItemIcon className={classes.list} id="seccion2">
                        <AccountBalanceIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Sección 2"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={classes.list} id="seccion3">
                        <HowToRegIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Sección 3"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={classes.list} id="seccion4">
                        <GavelIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Sección 4"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={classes.list} id="seccion5">
                        <PhoneInTalkIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Sección 5"/>
                </ListItem>
            </List>
        </>
    )
}

export default Lista;