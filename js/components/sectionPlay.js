'use strict';

const GamePlay = (update) => {
  const containerPrincipal = $('<div class="col-xs-12 col-md-7 play"></div>');
  const container = $('<div class="col-xs-9"></div>');
  const boxName = $('<div></div>');
  const h3 = $('<h3>Ingresa su nombre</h3><br>');
  const input = $('<input type="text" placeholder="Nombre">');
  const boxButton = $('<div></div>');
  const button = $('<button type="button" class="btn-comprobar">COMPROBAR</button>');

  boxName.append(h3);
  boxName.append(input);
  boxButton.append(button);
  container.append(boxName);
  container.append(boxButton);
  containerPrincipal.append(container);

  return containerPrincipal;
}
