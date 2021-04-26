import './App.css';
import ResponsiveDrawer from './appbar/ResponsiveDrawer';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'

import Seccion1 from './components/seccion1/Seccion1';
import Seccion2 from './components/seccion2/Seccion2'
import Seccion3 from './components/seccion3/Seccion3';
import Seccion4 from './components/seccion4/Seccion4';
import Seccion5 from './components/seccion5/Seccion5';

import Footer from './footer/Footer';

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
  },
}));

function App() {
  const classes= useStyles();
  return (
    <ThemeProvider>
      <ResponsiveDrawer/>
      <main className={classes.content} >
          <div className={classes.toolbar}/>
            <Seccion1/>
            <Seccion2/>
            <Seccion3/>
            <Seccion4/>
            <Seccion5/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </ThemeProvider>
  );
}

export default App;
