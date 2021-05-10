import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//Enrutamiento. Quiero ir al home cuando pulse al botón cerrar.
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Privacidad() {
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
      <span onClick={handleClickOpen("paper")} style={{fontSize: '0.9rem'}} color='white'>Política de Privacidad</span>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Politica de Privacidad</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
        <p>

            Hola soy Kevin Charles Turner, el propietario de esta web, cidlanzarote.com, y te informo que esta se adapta a la legalidad vigente.
            <br/><br/>
            La Política de Privacidad puede variar según las exigencias legislativas o de autorregulación, por lo que te aconsejo que la revises periódicamente.
            <br/>
            Siempre se aplicará cuando como Usuario rellenes cualquier tipo de formulario de contacto o suscripción donde se recojan datos de carácter personal (nombre, email, etc.).
            <br/><br/>
            Leyes que cumple esta política de privacidad.
            <br/>
            Como residente en España, esta web se somete a la legislación española y europea, por lo que debo cumplir con estas tres leyes:
            <br/>
            El RGPD (Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas) que es la nueva normativa de la Unión Europea que unifica la regulación del tratamiento de los datos personales en los distintos países de la UE.
            <br/>
            La LOPD (Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal y Real Decreto 1720/2007, de 21 de diciembre, el Reglamento de desarrollo de la LOPD) que regula el tratamiento de los datos personales y las obligaciones que debemos asumir los responsables de una web o un blog a la hora de             gestionar esta información.
            <br/>
            La LSSI (Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico) que regula las transacciones económicas mediante medios electrónicos, como es el caso de este blog.
            La identidad del responsable del tratamiento de los datos.
            <br/><br/>
            El responsable de los datos soy yo y aquí te proporciono todos mis datos:
            <br/>
            Nombre y apellidos: Kevin Charles Turner
            Marca comercial: Buceo CID Lanzarote – Canary Island Divers
            Web: cidlanzarote.com
            NIE: X7161400M
            Domicilio social: C/ Alemania, 1 CP:35510 Puerto del Carmen. Lanzarote.
            Actividad: Escuela de Buceo
            Correo electrónico: info@cidlanzarote.com
            <br/><br/>
            Qué esperamos de nuestros usuarios.
            <br/>
            El acceso y/o uso de este sitio web atribuye a quien lo realiza la condición de Usuario, aceptando, desde este mismo momento, plenamente y sin reserva alguna, el Aviso Legal, así como las condiciones particulares que, en su caso, lo complementen, en relación con determinados servicios y contenidos del sitio web.
            <br/>
            El Usuario queda informado, y acepta, que el acceso a la presente web no supone, en modo alguno, el inicio de una relación comercial con Buceo CID Lanzarote. De esta forma, el usuario se compromete a utilizar el sitio Web, sus servicios y contenidos sin contravenir la legislación vigente y la buena fe. Queda prohibido el uso de la web con fines ilícitos o lesivos, o que, de cualquier forma, puedan causar        perjuicio o impedir el normal funcionamiento del sitio web.
            <br/><br/>
            Respecto de los contenidos de esta web, se prohíbe:
            <br/>
            Su reproducción, distribución o modificación, total o parcial, a menos que se cuente con la autorización de sus legítimos titulares.
            <br/>
            Cualquier vulneración de los derechos del prestador o de los legítimos titulares.
            <br/>
            Su utilización para fines comerciales o publicitarios.
            <br/><br/>
            Qué información recabamos de nuestros usuarios y con qué finalidad la utilizamos.
            <br/>
            Todos los servicios ofertados en la web remiten a formularios de contacto y formularios de comentarios. Esta web siempre requiere el consentimiento previo de los usuarios para tratar sus datos personales con los fines indicados.
            <br/>
            El usuario tiene derecho a revocar su consentimiento previo en cualquier momento.
            <br/><br/>
            Sistemas de captura de información personal que utilizamos.
            <br/>
            Formulario de comentarios: En la web existe la posibilidad de que los usuarios dejen comentarios a las publicaciones del sitio. Existe una cookie que almacena los datos facilitados por el usuario para que no tenga que volver a introducirlos en cada nueva visita y se recogen internamente la dirección de email, nombre, web y la dirección IP. El usuario siempre tendrá derecho a la revisión, recuperación  o    borrado de sus datos.
            <br/>
            Formularios de contacto.
            <br/>
            En estos vd. Se pone en contacto con Buceo CID Lanzarote para recibir más información, preguntar alguna duda o pedir presupuesto respecto a  algún servicio. Recogemos en los formularios nombre y email.
            <br/>
            Su información está protegida de acuerdo a nuestra política de privacidad y cookies. Al enviar un formulario de contacto, usted comprende y acepta nuestra política de privacidad y cookies.
            <br/>
            Desde el momento en que se se pone en contacto con esta web, Buceo CID Lanzarote tiene acceso a: Nombre de usuario, correo electrónico y dirección IP conformando un fichero con el nombre de “Usuarios Web Buceo CID Lanzarote”.
            <br/>
            En todo caso Buceo CID Lanzarote se reserva el derecho de modificar, en cualquier momento y sin necesidad de previo aviso, la presentación y configuración de la web Buceo CID Lanzarote como la presente Política de Privacidad, por lo que le aconsejamos la visite periódicamente.
            <br/><br/>
            Compromisos y obligaciones con  nuestros usuarios.
            <br/>
            El acceso y/o uso de este sitio web atribuye a quien lo realiza la condición de Usuario, aceptando, desde este mismo momento, plenamente y sin reserva alguna, el Aviso Legal en relación con determinados servicios y contenidos del sitio Web.
            <br/>
            En la utilización de la wed de Buceo CID Lanzarote el Usuario se compromete a no llevar a cabo ninguna conducta que pudiera dañar la imagen, los intereses y los derechos de Buceo CID Lanzarote o de terceros o que pudiera dañar, inutilizar o sobrecargar la web de Buceo CID Lanzarote o que impidiera, de cualquier forma, la normal utilización de la web.
            <br/>
            Buceo CID Lanzarote adopta medidas de seguridad razonablemente adecuadas para detectar la existencia de virus. No obstante, el Usuario debe ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son invulnerables y que, por tanto Buceo CID Lanzarote no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos.
            <br/>
            En todo caso, Buceo CID Lanzarote se compromete legalmente a informar a sus usuarios de cualquier brecha de segurdiad en el plazo legal establecido por la RGPD.
            <br/><br/>
            Derecho al olvido.
            <br/>
            En todo momento el usuario de Buceo CID Lanzarote tendrá derecho a revisar, recuperar y/o borrar, total o parcialmente, los datos almacenados por Buceo CID Lanzarote. Solo tiene que enviar un correo electrónico a info@cidlanzarote.com y solicitarlo.
            <br/><br/>
            Enlaces Externos.
            <br/>
            Las páginas de Buceo CID Lanzarote proporcionan enlaces a otros sitios web propios y contenidos que son propiedad de terceros. El único objeto de los enlaces es proporcionar al Usuario la posibilidad de acceder a dichos enlaces y no se responsabiliza en ningún caso de los resultados que puedan derivarse al Usuario por acceso a dichos enlaces.
            <br/>
            El Usuario que se proponga establecer cualquier dispositivo técnico de enlace desde su sitio web a Buceo CID Lanzarote deberá obtener la autorización previa y escrita de Buceo CID Lanzarote. El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre Buceo CID Lanzarote y el propietario del sitio en el que se establezca el enlace, ni la aceptación o aprobación por parte de Buceo CID Lanzarote de sus contenidos o servicios.
            <br/><br/>
            Ejercicio de derechos ARCO.
            <br/>
            Se le informa que podrá ejercitar, respecto de los datos recabados, los derechos reconocidos en la Ley Orgánica 15/1999, de acceso rectificación o cancelación de datos y oposición. Por ello se le informa que podrá ejercer dichos derechos mediante solicitud escrita y firmada que podrá enviar, junto con fotocopia de su DNI o documento identificativos equivalente, al domicilio postal de  Kevin Charles Turner, C/Alemania, 1, CP:35510 Puerto del Carmen – Lanzarote o por correo electrónico, adjuntado fotocopia de DNI a: info@cidlanzarote.com
            <br/>
            En la mayor brevedad posible responderemos a su solicitud para confirmarle la ejecución del derecho que haya solicitado ejercer.
            <br/><br/>
            Exclusión de garantías y responsabilidad.
            <br/>
            El Prestador no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran traer causa de:
            <br/>
            La falta de disponibilidad, mantenimiento y efectivo funcionamiento de la web o de sus servicios y contenidos;
            <br/>
            La existencia de virus, programas maliciosos o lesivos en los contenidos;
            <br/>
            El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal;
            La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en el sitio web.
            <br/>
            El prestador no se hace responsable bajo ningún concepto de los daños que pudieran dimanar del uso ilegal o indebido de la presente página web.
            <br/><br/>
            Plataforma Europea de resolución de litigios en línea.
            <br/>
            La Comisión Europea facilita una plataforma de resolución de litigios en línea que se encuentra disponible en el siguiente enlace: http://ec.europa.eu/consumers/odr/. Los consumidores podrán someter sus reclamaciones a través de la plataforma de resolución de litigios en línea.
            <br/><br/>
            Ley aplicable y jurisdicción.
            <br/>
            Con carácter general las relaciones entre Buceo CID Lanzarote con los Usuarios de sus servicios telemáticos, presentes en este sitio web, se encuentran sometidas a la legislación y jurisdicción españolas.
            <br/><br/>
            Siempre estaremos localizables: Nuestro contacto.
            <br/>
            En caso de que cualquier Usuario tuviese alguna duda acerca de estas Condiciones legales o cualquier comentario sobre la web de Buceo CID Lanzarote, por favor diríjase a info@cidlanzarote.com o utilice el formulario de contacto disponible en el sitio web.
            <br/><br/>
            Registro de datos de carácter personal.
            <br/>
            Esta declaración tiene como finalidad informar a los usuarios de la Política general de Privacidad y Protección de Datos Personales seguida por Buceo CID Lanzarote.
            <br/>
            Esta Política de Privacidad podría variar en función de exigencias legislativas o de autorregulación, por lo que se aconseja a los usuarios que la visiten periódicamente. Será aplicable en caso de que los usuarios decidan rellenar algún formulario de cualquiera de los formularios disponibles en la web para contacto, registro en tienda… donde se recaben datos de carácter personal.
            <br/>
            Buceo CID Lanzarote informa al usuario de que es titular de un fichero de datos de carácter personal inscritos ante el R.G.P.D. (Registro General de Protección de Datos) bajo el nombre: “Usuario Web Buceo CID Lanzarote”, en los que sus datos serán tratados única y exclusivamente para dar respuesta a la pregunta o petición que nos formule y, en su caso, para gestionar su relación comercial con nosotros como cliente cuando formalice un servicio.
            <br/>
            Al utilizar los formularios de contacto, comentarios y compra, observará que algunos campos, como el nombre o el e-mail tienen la marca de un asterisco (*); esto significa que esos campos son obligatorios, y el formulario no podrá ser enviado si deja esos campos en blanco.
            <br/>
            El envío de datos de carácter personal es obligatorio para contactar y realizar operaciones comerciales con Buceo CID Lanzarote. Asimismo, el no facilitar los datos personales solicitados o el no aceptar la presente política de privacidad supone la imposibilidad de procesar las solicitudes realizadas en nuestro portal.
            <br/><br/>
            Uso y tratamiento de los datos de usuarios.
            <br/>
            Buceo CID Lanzarote tienen plena conciencia del uso y tratamiento que se debe dar a los datos personales que se puedan requerir o que se puedan obtener de los usuarios en sus páginas web con el fin de gestionar las solicitudes o los productos o servicios requeridos. En ningún momento hará un uso diferente de esta información ni compartirá datos de usuarios con terceros.
            <br/>
            Los datos personales recogidos en esta web solo se utilizarán exclusivamente para responder a su solicitud de información, gestionar pedidos y entregas, resolver incidencias, informar de ofertas puntuales a usuarios registrados en nuestro servicio de Newsletters/boletín, atender a reclamaciones que puedan surgir.
            <br/><br/>
            Secreto y seguridad de los datos.
            <br/>
            Buceo CID Lanzarote se compromete en la utilización de los datos incluidos en el fichero, a respetar su confidencialidad y a utilizarlos de acuerdo con la finalidad del mismo, así como a dar cumplimiento a su obligación de guardarlos y adaptar todas las medidas para evitar la alteración, pérdida, tratamiento o acceso no autorizado, de conformidad con lo establecido en el Real Decreto 1720/2007 de 21 de diciembre por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999 de 13 de diciembre, de Protección de Datos de Carácter Personal.
            <br/>
            El usuario garantiza que los datos personales facilitados a través del formulario son veraces, quedando obligado a comunicar cualquier modificación de los mismos. Igualmente, el Usuario garantiza que toda la información facilitada corresponde con su situación real, que está puesta al día y es exacta. Además el Usuario se obliga a mantener en todo momento sus datos actualizados, siendo el único responsable de la inexactitud o falsedad de los datos facilitados y de los perjuicios que pueda causar por ello a Kevin Charles Turner como titular de la web de Buceo CID Lanzarote , o a terceros con motivo de la utilización de dicho.
            <br/>
            Buceo CID Lanzarote no puede garantizar la absoluta inexpugnabilidad de la red Internet y por tanto la violación de los datos mediante accesos fraudulentos a ellos por parte de terceros. No obstante, y en base a la legislación vigente, se compromete a informar a los usuarios de cualquier brecha de seguridad en el plazo máximo establecido por la RGPD.
            <br/><br/>
            Con quién se comparten los datos.
            <br/>
            Algunas herramientas que utilizamos para gestionar tus datos son contratadas por terceros.
            <br/>
            Estas empresas son los siguientes prestadores bajo sus correspondientes condiciones de privacidad:
            <br/>
            Google Analytics: un servicio analítico de web prestado por Google, Inc., una compañía de Delaware cuya oficina principal está en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos (“Google”).
            <br/>
            Google Analytics utiliza “cookies”, que son archivos de texto ubicados en tu ordenador, para ayudar a redcoop.es a analizar el uso que hacen los usuarios de la web. La información que genera la cookie acerca de su uso en esta web (incluyendo tu dirección IP) será directamente transmitida y archivada por Google en los servidores de Estados Unidos.
            <br/>
            Hosting: Razón social1&1 INTERNET ESPAÑA, S.L.U. CIF B85049435 Datos decontacto AVENIDA DE LA VEGA, 1 -EDIFICIO VEGANOVA (EDIF.3 PLANTA 5º PUERTA C) 28108 Alcobendas – Madrid (España).
            <br/><br/>
            Navegación.
            <br/>
            Al navegar por nuestras páginas webs los servidores de Internet almacenarán su dirección IP en los logs de acceso de forma automática y con la única finalidad de permitir el tránsito por Internet, siendo necesario que su equipo facilite esta dirección IP cuando navega por Internet para que las comunicaciones puedan realizarse. Su dirección IP será utilizada además para realizar estadísticas sobre el número de visitantes de esta web y su procedencia, de forma totalmente transparente a su navegación.
            <br/><br/>
            Ejercicio de los derechos de acceso, rectificación, cancelación u oposición.
            <br/>
            Puede ejercer los derechos de acceso, rectificación, cancelación y oposición mediante escrito dirigido a la dirección del responsable: Kevin Charles Turner, C/ Alemania, 1 CP: 35510 Puerto del Carmen – Lanzarote, junto con prueba válida en derecho, como fotocopia del D.N.I. o equivalente, indicando en el asunto “PROTECCIÓN DE DATOS” o por correo electrónico a : info@cidlanzarote.com.
            <br/><br/>
            Aceptación y consentimiento.
            <br/>
            El Usuario declara haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptando y consintiendo el tratamiento de los mismos por parte de Buceo CID Lanzarote, en la forma y para las finalidades indicadas en la presente Política de Privacidad.
            <br/><br/>
            Correos comerciales.
            <br/>
            De acuerdo con la LSSICE, Buceo CID Lanzarote no realiza prácticas de SPAM, por lo que no envía correos comerciales por vía electrónica que no hayan sido previamente solicitados o autorizados por el Usuario. En consecuencia, en cada uno de los formularios habidos en la Página Web, el Usuario tiene la posibilidad de dar su consentimiento expreso para recibir nuestra Newsletter/boletín, con independencia de la información comercial puntualmente solicitada.
        </p>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
          {/* Enrutamiento. Quiero quel al pulsar Cerrar el enlace cambie de /politica_de_privacidad a '/' */}
          <Router>
            <Link to='/'>
              <Button onClick={handleClose} color="primary">
                Cerrar
              </Button>
            </Link>
          </Router>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Privacidad;