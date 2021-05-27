import {Switch, Route, NavLink} from 'react-router-dom'
import Prueba1 from './Prueba1'
import Prueba2 from './Prueba2'

const ListaPrueba = () => {
    return (
        <div style={{backgroundColor:'black'}}>
                <div >
                    <h1>PRUEBAS DE RUTAS</h1>
                    {/* Eiqueta NavLink de react-router-dom.
                    La única diferencia entre esta etiqueta y la etiqueta Link es que contiene la clase active: activeClassName='active'.
                    Esta clase nos permite darle estilos en el archivo index.css que importamos en index.js.
                    CON ESTOS ESTILOS CONSEGUIMOS RESALTAR EL ENLACE ACTIVO DE NUESTROS MENÚS DE NAVEGACIÓN */}
                    <NavLink activeClassName='active' to='/prueba1'>
                        Prueba 1
                    </NavLink>
                    <NavLink activeClassName='active' to='/prueba2'>
                        Prueba 2
                    </NavLink>
                    <NavLink activeClassName='active' to='/prueba3'>
                        Prueba 3
                    </NavLink>
                    <NavLink activeClassName='active' to='/prueba4'>
                        Prueba 4
                    </NavLink>
                </div>
                <Switch>
                    {/* Si dejo como path='/' en vez de '/prueba1' el componente se verá por defecto al cargar la página. Si pongo '/prueba1' todo permanecerá invisible hasta que pulse en enlace */}
                    {/* Es decir, usando '/' en el enrutamiento puedo seleccionar qué partes de la app quiero cargar de inicio y que partes quiero que permanezcan ocultas hasta que no pulse el enlace. Por ejemplo en la sección INMERSIONES puedo selecionar por defecto Puerto del Carmen */}
                    <Route exact path='/prueba1'>
                        <Prueba1/>
                    </Route>
                    <Route exact path='/prueba2'>
                        <Prueba2/>
                    </Route>
                    <Route exact path='/prueba3'>
                        <Prueba1/>
                    </Route>
                    {/* Sintaxis reducida. Elimino la etiqueta de cierre e inserto component={} tras la ruta y dentro el componente al que quiero llamar. Así lo dejo en una sola línea */}
                    <Route exact path='/prueba4' component={Prueba2} />
                </Switch>
        </div>
    )
}

export default ListaPrueba
