'use strict';

const Image = (coder,update) => {
  const container = $('<div></div>');
  const img = $(`<img src="img/${coder.country}/${coder.image}">`);

  container.append(img);
  return container;
}

$("select").on('change',(e) => {
  e.preventDefault();
  var a = $("select").val();
  alert("dfdfgdg");
  const pais = filterByCountry(state.coders, a);
  reRender(containerImg, pais);
});

const reRender = (containerImg, coderSeleccionada) => {
  container.empty();
  var r = Math.floor(Math.random()*coderSeleccionada.length);
  containerImg.append(Image(coderSeleccionada[r]));
}
