
import { inicioSesion } from '../firebase/firebase-inicio-sesion.js';
import { vistaRegistro, eventoBotonRegistro } from './registro.js';

const vistaLogin = () => {
  const mainLogin = document.createElement('main');
  const inicioLogin = `
           <section>
              <h1>Nutrired</h1>
              <p>Bienvenidos.</p>
           </section>
        
           <section>
              <input type='email' id='emailLogin' placeholder='Email' maxlength='30' name='usuarioLogin'>
              <input type='password' id='passwordLogin' placeholder='Password' name='passwordLogin' minlength='6'>
              <button type='button' id='botonLogin'>Log in</button>
           </section> 
        `;

  mainLogin.innerHTML = inicioLogin;
  mainLogin.appendChild(vistaRegistro());
  eventoBotonRegistro();
  document.getElementById('root').appendChild(mainLogin);
};

vistaLogin();

// Evento del boton login

const eventoBotonLogin = document.querySelector('#botonLogin');
eventoBotonLogin.addEventListener('click', () => {
  const emailLogin = document.querySelector('#emailLogin').value;
  const passwordLogin = document.querySelector('#passwordLogin').value;
  inicioSesion(emailLogin, passwordLogin);
  console.log('Hola Mundo');
});
