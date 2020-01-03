export const registro = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password));
