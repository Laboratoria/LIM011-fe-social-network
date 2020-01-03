import { registerWithEmail, userCurrent, createUser } from '../firebase-controller/userAuthentication.js';

export const registerFunction = (email, pass, mensajeError, username, foto) => {
  const msjError = mensajeError;
  registerWithEmail(email, pass)
    .then((result) => {
      const user = userCurrent();// obtiene el usuario que accedió
      createUser(user.uid, username, email, foto);// creamos el usuario en firebase
      window.location.hash = '#/';
      console.log(result);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Detectado un error:', error, errorMessage);

      switch (errorCode) {
        case 'auth/email-already-in-use': msjError.innerHTML = '*La dirección de correo electrónico ya existe.';
          break;
        case 'auth/weak-password':
          msjError.innerHTML = '*La contraseña debe tener al menos 6 caracteres.';
          break;
        case 'auth/invalid-email':
          msjError.innerHTML = '*El formato del correo ingresado no es válido, verifica e intente de nuevo.';
          break;
        default:
          msjError.innerHTML = 'Se ha producido un error';
      }
    });
};
