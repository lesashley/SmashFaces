'use strict';

const Image = (coder,update) => {
  const container = $('<div></div>');
  const img = $(`<img src="img/${coder.sede}/${coder.image}">`);
  container.append(img);
  return container;
}

$("select").on('change',(e) => {
  e.preventDefault();
  var a = $("select").val();
  const selectedCoder = filterByCountry(state.coders, a);
  reRender($(".box-img"), selectedCoder);
});

const reRender = (containerImg, coderSeleccionada) => {
  containerImg.empty();
  containerImg.append(Image(coderSeleccionada));
}
