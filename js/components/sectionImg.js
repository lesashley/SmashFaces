'use strict';

const Image = (coder,pais,update) => {
  const container = $('<div class="col-xs-10 col-md-8"></div>');
  const img = $(`<img src="img/Mexico/${coder.image}">`);

  container.append(img);
  return container;
}
