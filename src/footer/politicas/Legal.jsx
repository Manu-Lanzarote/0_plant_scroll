import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Legal() {
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
      <Button onClick={handleClickOpen("paper")} style={{fontSize: '0.65rem'}}>Aviso Legal</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Aviso Legal</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se indican los datos de información general del sitio web Buceo CID Lanzarote con NIF: J35870773 Calle Alemania, 1. Tías – Las Palmas.
            <br/><br/>
            Objeto del Aviso Legal:
            <br/><br/>
            El Aviso Legal regula las condiciones, el acceso y la utilización del sitio web, sus contenidos y servicios, de pago o gratuitos, puestos a disposición de los Usuarios.
            <br/><br/>
            Propiedad intelectual:
            <br/><br/>
            La información y los contenidos que se recogen en el presente sitio web, así como el código fuente, los diseños gráficos, las imágenes, las fotografías, el software y los textos, están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de Canary Island Divers SCP y no se permite la reproducción y/o publicación, total o parcial, del sitio web, ni su tratamiento informático, su distribución, su difusión, su modificación, su transformación ni demás derechos reconocidos legalmente a su titular, sin el permiso previo y por escrito del mismo. Todos los derechos derivados de la propiedad intelectual están expresamente reservados por la Canary Island Divers SCP. El Usuario, única y exclusivamente, puede utilizar el material que aparezca en este sitio web para su uso personal y privado, quedando prohibido su uso con fines comerciales o para incurrir en actividades ilícitas.
            <br/><br/>
            Exclusión de garantías y responsabilidad:
            <br/><br/>
            Canary Island Divers SCP no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            <br/><br/>
            Modificaciones:
            <br/><br/>
            Canary Island Divers SCP se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su sitio web.
            <br/><br/>
            Vínculos a Terceros:
            <br/><br/>
            En el caso de vínculos a sitios webs de terceros, el Usuario pasará a estar regido por los Términos de Uso y Política de Privacidad del nuevo sitio. Canary Island Divers SCP no será responsable ni tendrá obligación legal por el uso de tales sitios.
            <br/><br/>
            Generalidades:
            <br/><br/>
            Canary Island Divers SCP no realizará publicidad engañosa a través de su sitio web. A estos efectos, por lo tanto, no serán considerados como publicidad engañosa los errores formales o numéricos que puedan encontrarse a lo largo del contenido de las distintas secciones del sitio web producidos como consecuencia de un mantenimiento y/o actualización incompleta o defectuosa de la información contenida es estas secciones. Canary Island Divers SCP, como consecuencia de lo dispuesto en este apartado, se compromete a corregirlo tan pronto como tenga conocimiento de dichos errores. Canary Island Divers SCP no se hace responsable del incumplimiento de cualquier norma aplicable en que pueda incurrir el Usuario en su acceso al sitio web y/o en el uso de las informaciones contenidas en el mismo.
            <br/><br/>
            Legislación aplicable y Jurisdicción:
            <br/><br/>
            Las partes, con renuncia a su fuero propio, si ello fuera posible, se someten a los Juzgados y Tribunales de la provincia de Las Palmas. La Ley aplicable será la española.
            <br/><br/>
            En Tías, a 20 de mayo de 2018
            <br/><br/>
            Última modificación: 20 de mayo de 2018
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

export default Legal;