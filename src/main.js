import { firebaseConfig } from './firebaseconfig.js';
import { changeView } from './viewcontrole/rutas.js';

const init = () => {
  firebase.initializeApp(firebaseConfig);
  changeView(window.location.hash);

  window.addEventListener('hashchange', () => changeView(window.location.hash));

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location.hash = '#/interacciones';
      // eslint-disable-next-line no-console
      console.log('Existe usuario logueado');
    } else {
      // eslint-disable-next-line no-console
      console.log('No existe usuario logueado');
    }
  });
};
window.addEventListener('load', init);
