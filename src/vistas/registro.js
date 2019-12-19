import { registro } from '../firebase/firebase-registro.js';
import { figureLoginRegistro } from './login.js';


// Main Registro
const mainRegistroForm = () => {
  const mainRegistro = document.createElement('main');
  const inicioRegistro = `
        <figure>
          <img src='img/logo.jpeg' id='logoLoginRegistro'>
        </figure>
        <section>
            <p>Crea una cuenta.</p>
            <form id='seccionForm'>
              <input type='text' id='name' name='nombreUsuario' placeholder='Nombre' maxlength='30' >
              <input type='text' id='lastName' name='appellidoUsuario' placeholder='Apellido' maxlength='30'>
              <input type='email' id='registroEmail' placeholder='Email' maxlength='30' name='emailUsuario'>
              <input type='password' id='registroPassword' placeholder='Password' name='password' minlength='6'>
              <button type='button' id='botonRegistro'>Registrate</button>
            </form>
            <div id='iconoRedesSociales'>
                <p class='parrafo'>¿Tienes una cuenta? <a href="#/iniciasesion" id='enlaceRegistro'>Inicia Sesiòn</a></p>
                <a href='#'><img src='https://image.flaticon.com/icons/png/512/2392/premium/2392485.png' class='iconRed'></a>
                <a href='#'><img src='https://icon-library.net/images/google-icon-search/google-icon-search-19.jpg' class='iconRed'></a>
            </div>
            
        </section>     
      `;

  mainRegistro.innerHTML = inicioRegistro;
  const botonRegistro = mainRegistro.querySelector('#botonRegistro');

  botonRegistro.addEventListener('click', () => {
    const emailRegistro = document.querySelector('#registroEmail').value;
    const passwordRegistro = document.querySelector('#registroPassword').value;
    registro(emailRegistro, passwordRegistro);
  });
  return mainRegistro;
};


// Div contenedor vista Registro
export const divVistaRegistro = () => {
  const divContenedorRegistro = document.createElement('div');

  divContenedorRegistro.appendChild(figureLoginRegistro());
  divContenedorRegistro.appendChild(mainRegistroForm());
  return divContenedorRegistro;
};

// Evento del boton registro
