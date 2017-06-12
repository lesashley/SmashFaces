'use strict';

const GamePlay = (update) => {
  const containerPrincipal = $('<div class="col-xs-12"></div>')
  const containerImg = $('<div class="col-xs-10 col-md-5 picture box-img"></div>');
  const containerPlay = $('<div class="col-xs-12 col-md-7 play"></div>');
  const containerGame = $('<div class="col-xs-9 box-content"></div>');
  const boxName = $('<div></div>');
  const h3 = $('<h3>Ingresa su nombre</h3><br>');
  const input = $('<input type="text" placeholder="Nombre">');
  const boxButton = $('<div></div>');
  const button = $('<button type="button" class="btn-comprobar">COMPROBAR</button>');
  const textButton = $('<p class="text"></p>');

  boxName.append(h3);
  boxName.append(input);
  boxButton.append(button);
  boxButton.append(textButton);
  containerGame.append(boxName);
  containerGame.append(boxButton);
  containerPlay.append(containerGame);
  containerPrincipal.append(containerImg);
  containerPrincipal.append(containerPlay);

  button.on('click', (e) =>{
    filterByName(state.selectedCoder,input.val());
    input.val("");
  })
  return containerPrincipal;
}
const filterByCountry = (coder,sede) => {
  var coderSelect = coder.filter(e => {
    return e.sede == sede;
  });
  const coderSelectSede = coderSelect[Math.floor(Math.random() * coderSelect.length)];
  state.selectedCoder = coderSelectSede;
  return coderSelectSede;
}

var puntos = 0;
var intentos = 5;
const filterByName = (coder,name)=>{
  if (coder.name.toLowerCase() == name.toLowerCase()) {
    msjError("Acertastes");
    $(".box-img").empty();
    var sede = $("select").val();
    var newCoder = filterByCountry(state.coders,sede);
    reRender($(".box-img"), newCoder);
    msjError("");
    $("#point").empty();
    puntos++;
    $("#point").text(puntos);
  }
  else {
    intentos--;
    if (intentos == 0) {
      puntos--;
      $("#point").text(puntos);
      var sede = $("select").val();
      var newCoder = filterByCountry(state.coders,sede);
      reRender($(".box-img"), newCoder);
      msjError("");
      intentos = 5;
    }else{
      msjError("Te quedan " +intentos+ " intento(s)");
    }
  }
}
const msjError = (texto) => {
  $(".text").empty();
  $(".text").text(texto);
}
