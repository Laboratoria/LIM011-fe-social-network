
import { inicioSesion } from '../firebase/firebase-inicio-sesion.js';
import { vistaRegistro, eventoBotonRegistro } from './registro.js';

// Header:
const encabezadoLogin = () => {
  const headerLogin = document.createElement('header');
  const imageLogin = '<img src=\'https://image.freepik.com/vector-gratis/comida-sana-personas_24908-55204.jpg\' id=\'imgPrincipal\'>';

  headerLogin.innerHTML = imageLogin;
  document.getElementById('root').appendChild(headerLogin);
};

encabezadoLogin();

// Main:
const formLogin = () => {
  const mainLogin = document.createElement('main');
  const inicioLogin = `
           <section>
              <h1>Nutrired</h1>
              <p>Bienvenido</p>
           </section>
        
           <section>
              <input type='email' id='emailLogin' placeholder='Email' maxlength='30' name='usuarioLogin'>
              <input type='password' id='passwordLogin' placeholder='Password' name='passwordLogin' minlength='6'>
              <button type='button' id='botonLogin'>Log in</button>
           </section> 
        `;

  mainLogin.innerHTML = inicioLogin;
  mainLogin.appendChild(vistaRegistro());

  document.getElementById('root').appendChild(mainLogin);
};

formLogin();

// Footer:
const footerLogin = () => {
  const piePaginaLogin = document.createElement('footer');
  const contenidoFooter = `
      <p>O bien ingresa con..</p>
      <a href='#'><img src='https://image.flaticon.com/icons/png/512/2392/premium/2392485.png'></a>
      <a href='#'><img src='https://image.flaticon.com/icons/png/512/145/145804.png'></a>
      <p>¿No tienes una cuenta? <a href='#'>Regístrate</a></p>                      
   `;

  piePaginaLogin.innerHTML = contenidoFooter;
  document.getElementById('root').appendChild(piePaginaLogin);
};

footerLogin();

// Después que se muestre el template, añadimos el evento:
eventoBotonRegistro();

// Evento del boton login
const botonLogin = () => {
  const eventoBotonLogin = document.querySelector('#botonLogin');
  eventoBotonLogin.addEventListener('click', () => {
    const emailLogin = document.querySelector('#emailLogin').value;
    const passwordLogin = document.querySelector('#passwordLogin').value;
    inicioSesion(emailLogin, passwordLogin);
    console.log('Hola Mundo');
  });
};

botonLogin();
