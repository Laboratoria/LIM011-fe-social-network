import { registro } from '../firebase/firebase-registro.js';

// Creando login
export const vistaRegistro = () => {
  const divRegistro = document.createElement('div');
  const inicioRegistro = `
         <section>
            <h1>Nutrired</h1>
            <p>Crea una cuenta.</p>
         </section>
      
         <section>
            <input type='text' id='name' name='nombreUsuario' placeholder='Nombre' maxlength='30' >
            <input type='text' id='lastName' name='appellidoUsuario' placeholder='Apellido' maxlength='30'>
            <input type='email' id='registroEmail' placeholder='Email' maxlength='30' name='emailUsuario'>
            <input type='password' id='registroPassword' placeholder='Password' name='password' minlength='6'>
            <button type='button' id='botonRegistro'>Registrate</button>
         </section> 
      `;

  divRegistro.innerHTML = inicioRegistro;
  return divRegistro;
};


// Evento del boton login
export const eventoBotonRegistro = () => {
  const botonRegistro = document.querySelector('#botonRegistro');

  botonRegistro.addEventListener('click', () => {
    const emailRegistro = document.querySelector('#registroEmail').value;
    const passwordRegistro = document.querySelector('#registroPassword').value;
    registro(emailRegistro, passwordRegistro);
    console.log('Hola Mundo');
  });
};
