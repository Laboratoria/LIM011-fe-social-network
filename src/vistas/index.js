import { divVistaLogin } from './login.js';
import { divVistaRegistro } from './registro.js';
import Different from './404.js';


const components = {
  login: divVistaLogin,
  createAccount: divVistaRegistro,
  different: Different,
};

export { components };
