'use strict';

const GamePlay = (update) => {
  const containerPrincipal = $('<div class="col-xs-12 col-md-7 play"></div>');
  const containerImg = $('<div class="col-xs-10 col-md-8"></div>');
  const containerGame = $('<div class="col-xs-9"></div>');
  const boxName = $('<div></div>');
  const h3 = $('<h3>Ingresa su nombre</h3><br>');
  const input = $('<input type="text" placeholder="Nombre">');
  const boxButton = $('<div></div>');
  const button = $('<button type="button" class="btn-comprobar">COMPROBAR</button>');

  boxName.append(h3);
  boxName.append(input);
  boxButton.append(button);
  containerGame.append(boxName);
  containerGame.append(boxButton);
  containerPrincipal.append(containerGame);
  containerPrincipal.append(containerImg);


/*Imprimir todas las imagenes*/
  // state.coders.forEach((e) =>{
  //   console.log(e.name);
  //   containerImg.append(imagenes(e));
  // });

  return containerPrincipal;
}

// const filterByCountry = (c,country) => {
//   return c.filter(e => {
//     return e.country == country;
//   });
// }



/*FUNCION PARA PROBAR IMPRIMIR FOTOS*/
// const imagenes = (coder) => {
//   const container = $('<div></div>');
//   const img = $(`<img src="img/${coder.country}/${coder.image}">`);
//   container.append(img);
//   return container;
// }
