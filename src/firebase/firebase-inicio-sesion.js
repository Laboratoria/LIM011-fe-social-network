export const inicioSesion = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password));
