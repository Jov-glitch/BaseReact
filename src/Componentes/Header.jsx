// Estructura de un componente para los demas
// componentes/Header.jsx
import React from 'react'; //este va de ahuevo siempre
import './../css/style.css'; //Aqui importe la css (MUCHO OJO CON LAS RUTAS, SIEMPRE VERIFICALAS CON CTR + CLICK DEL MAUSE PARA QUE LO ABRA VSC)
//Tambien tendras que checar la ruta de las imagenes en la css, tendras que cambiarlas y ajustarlas para el directorio de react
//Objeto que almacenara todo lo que se va a mostrar
const Header = () => {
  return ( //Importante eso, aqui retornara todo lo que se va a mostrar cuando se llame la funcion "Header"
    <header id="nav-wrapper">
        <nav class="light-secondary-color">
            <a href="/" class="logo"></a>
            <ul class="list">
            <li><a href="mercancia.html">Mercancia</a></li>
            <li><a href="musica.html">Musica</a></li>
            <li><a href="/#Dev.Web.">Dev.Web.</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <button class="search">Search</button>
            <button class="menu">Menu</button>
        </nav>
    </header>
  );
};

export default Header; //Se exporta el componente con el nombre de "Header"
