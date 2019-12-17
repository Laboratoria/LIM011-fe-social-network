import { components } from '../vistas/index.js';

export const changeTmp = (hash) => {
  const id = hash.split('/')[1];
  const sectionMain = document.getElementById('root');
  sectionMain.innerHTML = '';
  switch (hash) {
    case '#/iniciasesion':
    case '#/creacuenta':
    { return sectionMain.appendChild(components[id]()); }
    default:
      return sectionMain.appendChild(components.different());
  }
};
