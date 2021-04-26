import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Cookies() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen("paper")} style={{fontSize: '0.65rem'}}>Política de Cookies</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Politica de Cookies</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p>
              En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, esta página web le informa, en esta sección, sobre la política de recogida y tratamiento de cookies.
            <br/><br/>
            ¿Qué son las cookies?
            <br/>
            Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            <br/><br/>
            ¿Qué tipos de cookies utiliza esta página web?
            <br/>
            Esta página web utiliza los siguientes tipos de cookies:
            <br/><br/>
            Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
            <br/><br/>
            Cookies técnicas: Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo, llevar a cambio el proceso de compra de un artículo.
            <br/><br/>
            Cookies de personalización: Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta al servicio.
            <br/><br/>
            Cookies publicitarias: Son aquéllas que, bien tratadas por esta web o por terceros, permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle            publicidad relacionada con su perfil de navegación.
            <br/><br/>
            Cookies de publicidad comportamental: Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Este tipo de cookies almacenan información del comportamiento de los visitantes obtenida a través de la observación continuada de sus hábitos de       navegación, lo que permite desarrollar un perfil específico para mostrar avisos publicitarios en función del mismo.
            <br/><br/>
            Desactivar las cookies.
            <br/>
            Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            <br/>
            En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.
            <br/>
            A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:
            <br/><br/>
            Configurar cookies en Google Chrome
            <br/><br/>
            Configurar cookies en Microsoft Internet Explorer
            <br/><br/>
            Configurar cookies en Mozilla Firefox
            <br/><br/>
            Configurar cookies en Safari (Apple)
            <br/><br/>
            Cookies de terceros.
            <br/>
            Esta página web utiliza servicios de terceros para recopilar información con fines estadísticos y de uso de la web. Se usan cookies de DoubleClick para mejorar la publicidad que se incluye en el sitio web. Son utilizadas para orientar la publicidad según el contenido que es relevante para un usuario, mejorando así la calidad de experiencia en el uso del mismo.
            <br/>
            En concreto, usamos los servicios de Google Adsense y de Google Analytics para nuestras estadísticas y publicidad. Algunas cookies son esenciales para el funcionamiento del sitio, por ejemplo el buscador incorporado.
            <br/>
            Nuestro sitio incluye otras funcionalidades proporcionadas por terceros. Usted puede fácilmente compartir el contenido en redes sociales como Facebook, Twitter o Instagram, con los botones que hemos incluido a tal efecto.
            <br/><br/>
            Advertencia sobre eliminar cookies.
            <br/>
            Usted puede eliminar y bloquear todas las cookies de este sitio, pero parte del sitio no funcionará o la calidad de la página web puede verse afectada.
            <br/>
            Si tiene cualquier duda acerca de nuestra política de cookies, puede contactar con esta página web a través de nuestros canales de Contacto.
          </p>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cookies;
