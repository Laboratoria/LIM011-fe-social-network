import { getItemLocalStorage, saveItemLocalStorage } from '../function.js';

export const elementoPost = (comentario, index) => {
  const onlyComment = document.createElement('div');
  onlyComment.classList.add('publicaciones');
  const date = new Date(comentario.fecha);
  const textoTipoPost = comentario.tipo === 'privado'
    ? '<i id="private" class="icon-user-secret iconClass"></i>' : '';
  onlyComment.innerHTML = `
      <!-- Avatar -->
      <figure class="comment-avatar"> <img src="./imagen/usuario.png" alt=""/> </figure>
      <!-- Contenedor del Comentario -->
      <div class="comment-box">
      <section class="comment-head iconClass">
        <h6 class="comment-name by-author">${comentario.nombre}</h6>
        <span>${date.toString().slice(3, -40)}</span>
        ${textoTipoPost}
        <button id="modify-${index}" class="icon-pencil iconClass" ></button>
        <button id="delete-${index}" class="icon-trash-1 iconClass"></button>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section id="ModifyComment" class ="none">
      <textarea id="story" name="story" rows="10" cols="20">${comentario.texto}</textarea>
      <input id="modify" type="button" value="modificar" class="button">
      </section>
      <section class="comment-opinion">
      <button class="icon-heart iconClass" id="reactionPostLove-${index}" onClick="reactionPostLove"></button>
      <button type="button" id="comentarComentario" <i class="icon-chat iconClass"></i>comentar</button>
      </section>
    </div>
  </div> `;
  // eliminar post
  const registroPosts = JSON.parse(getItemLocalStorage('posts'));
  const deletePost = onlyComment.querySelector(`#delete-${index}`);
  deletePost.addEventListener('click', () => {
    const newPost = [];
    registroPosts.forEach((element, index1Post) => {
      if (index1Post !== index) {
        newPost.push(element);
      }
    });
    saveItemLocalStorage('posts', JSON.stringify(newPost));
    const postsActuales = JSON.parse(getItemLocalStorage('posts'));
    const divPadrePosts = document.querySelector('#commits');
    divPadrePosts.innerHTML = '';
    postsActuales.forEach((element, indice) => {
      const newNodoPost = elementoPost(element, indice);
      divPadrePosts.appendChild(newNodoPost);
    });
  });

  // esditar post

  const editPost = onlyComment.querySelector(`#modify-${index}`);
  editPost.addEventListener('click', () => {
    const registro = JSON.parse(getItemLocalStorage('posts'));
    registro.forEach((element, index1Post) => {
      if (index1Post === index) {
        onlyComment.querySelector(`#modify-${index}`).classList.add('none');
        onlyComment.querySelector('#ModifyComment').classList.remove('none');
        /* newPost.push(element); */
      }
    });
  });
  const savePostEdit = onlyComment.querySelector('#modify');
  savePostEdit.addEventListener('click', () => {
    const registro = JSON.parse(getItemLocalStorage('posts'));
    registro.forEach((element, index1Post) => {
      if (index1Post === index) {
        // eslint-disable-next-line no-param-reassign
        element.texto = onlyComment.querySelector('#story').value;
      }
    });
    saveItemLocalStorage('posts', JSON.stringify(registro));
    const postsActuales = JSON.parse(getItemLocalStorage('posts'));
    const divPadrePosts = document.querySelector('#commits');
    divPadrePosts.innerHTML = '';
    postsActuales.forEach((element, indice) => {
      const newNodoPost = elementoPost(element, indice);
      divPadrePosts.appendChild(newNodoPost);
    });
  });

  return onlyComment;
};
