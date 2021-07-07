//En este archivo guardamos todos las modificaciones que por defecto tiene el tema Material UI.
//Los encontraremos en Material UI / Personalización / Tema predeterminado

//Lo que no encontremos aquí, como por ejemplo que nuestra app tenga una imagen de fondo tendremos que añidirlo en App.jsx con   makeStyles

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    //Con el type configuramos el modo claro u oscuro en la app.
    //En esta web no se ve el color background por que tenemos una imagen de fondo. Se ve por en componentes que no lleven como las políticas.
    type: "dark",
    background: {
      paper: "#111111",
    },
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#111111",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 300,
    },
  },
});

export default theme;
