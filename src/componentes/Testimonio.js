import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
import Button from 'react-bootstrap/Button';
export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        //Lo que esta {} entre las llaves es texto en JS
        //Para insertar una imagen directamente utilizamos require
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt='Foto de Emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <a href='https://utd.edu.mx/'>UTD</a>
          <a href='https://github.com/'>GITHUB</a>
          <a href='https://es-la.facebook.com/'>FACEBOOK</a>
      </div>
    </div>
  );
}
//Exportacion por default
//export default Testimonio;