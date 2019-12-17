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
  mainLogin.id = 'mainLogin';

  const inicioLogin = `
           <section>
              <img src='img/logo.jpeg' id='logoLoginRegistro'>
              <p class='parrafo'>¡Bienvenido!</p>
           </section>
        
           <section>
            <form action="#" method="post">
              <input type='email' id='emailLogin' class='inputRegistro' placeholder='Email' maxlength='30' name='usuarioLogin'>
              <input type='password' id='passwordLogin' class='inputRegistro' placeholder='Password' name='passwordLogin' minlength='6'>
              <button type='button' id='botonLogin'>Log in</button>
              <a class="link color" href="#/iniciasesion">
           </section> 
        `;

  mainLogin.innerHTML = inicioLogin;

  return mainLogin;
};


// Footer:
export const footerLoginRegistro = () => {
  const piePaginaLogin = document.createElement('footer');
  piePaginaLogin.id = 'footerLoginRegistro';
  const contenidoFooter = `
      <p class='parrafo'>O bien ingresa con..</p>
      <section id='iconoRedesSociales'>
      <a href='#'><img src='https://image.flaticon.com/icons/png/512/2392/premium/2392485.png' class='iconRed'></a>
      <a href='#'><img src='https://icon-library.net/images/google-icon-search/google-icon-search-19.jpg' class='iconRed'></a>
      </section>
      <p class='parrafo'>¿No tienes una cuenta? <a href='#' id='enlaceRegistro'>Regístrate</a></p>                      
   `;

  piePaginaLogin.innerHTML = contenidoFooter;

  return piePaginaLogin;
};


// Div contenedor de vista Login
const divVistaLogin = () => {
  const divContenedorLogin = document.createElement('div');

  divContenedorLogin.appendChild(encabezadoLoginRegistro()).style.justifyContent = 'flex-start';
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
