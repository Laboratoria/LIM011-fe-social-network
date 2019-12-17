import { registro } from '../firebase/firebase-registro.js';
import { encabezadoLoginRegistro, footerLoginRegistro } from './login.js';


// Main Registro
const mainRegistroForm = () => {
  const mainRegistro = document.createElement('main');
  const inicioRegistro = `
         <section id='seccionLogo'>
            <h1>Nutrired</h1>
            <p>Crea una cuenta.</p>
         </section>
      
         <section id='seccionForm'>
            <input type='text' id='name' name='nombreUsuario' placeholder='Nombre' maxlength='30' >
            <input type='text' id='lastName' name='appellidoUsuario' placeholder='Apellido' maxlength='30'>
            <input type='email' id='registroEmail' placeholder='Email' maxlength='30' name='emailUsuario'>
            <input type='password' id='registroPassword' placeholder='Password' name='password' minlength='6'>
            <button type='button' id='botonRegistro'>Registrate</button>
            <a class="" href="#/creacuenta"></a>
         </section> 
      `;

  mainRegistro.innerHTML = inicioRegistro;

  return mainRegistro;
};


// Div contenedor vista Registro
const divVistaRegistro = () => {
  const divContenedorRegistro = document.createElement('div');

  divContenedorRegistro.appendChild(encabezadoLoginRegistro());
  divContenedorRegistro.appendChild(mainRegistroForm());
  divContenedorRegistro.appendChild(footerLoginRegistro());
};

divVistaRegistro();


// Evento del boton registro
export const eventoBotonRegistro = () => {
  const botonRegistro = document.querySelector('#botonRegistro');

  botonRegistro.addEventListener('click', () => {
    const emailRegistro = document.querySelector('#registroEmail').value;
    const passwordRegistro = document.querySelector('#registroPassword').value;
    registro(emailRegistro, passwordRegistro);
  });
};
