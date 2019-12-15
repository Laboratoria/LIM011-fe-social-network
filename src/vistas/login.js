import { inicioSesion } from '../firebase/firebase-inicio-sesion.js';

// Header:
export const encabezadoLoginRegistro = () => {
  const headerLoginRegistro = document.createElement('header');
  const imageEncabezado = `
    <img src='https://image.freepik.com/vector-gratis/comida-sana-personas_24908-55204.jpg' id='imgPrincipal'>
  `;

  headerLoginRegistro.innerHTML = imageEncabezado;

  return headerLoginRegistro;
};


// Main Login
const mainLoginForm = () => {
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

  return mainLogin;
};


// Footer:
export const footerLoginRegistro = () => {
  const piePaginaLogin = document.createElement('footer');
  const contenidoFooter = `
      <p>O bien ingresa con..</p>
      <a href='#'><img src='https://image.flaticon.com/icons/png/512/2392/premium/2392485.png'></a>
      <a href='#'><img src='https://icon-library.net/images/google-icon-search/google-icon-search-19.jpg'></a>
      <p>¿No tienes una cuenta? <a href='#'>Regístrate</a></p>                      
   `;

  piePaginaLogin.innerHTML = contenidoFooter;

  return piePaginaLogin;
};


// Div contenedor de vista Login
const divVistaLogin = () => {
  const divContenedorLogin = document.createElement('div');

  divContenedorLogin.appendChild(encabezadoLoginRegistro());
  divContenedorLogin.appendChild(mainLoginForm());
  divContenedorLogin.appendChild(footerLoginRegistro());

  document.getElementById('root').appendChild(divContenedorLogin);
};

divVistaLogin();


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
