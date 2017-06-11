'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper col-xs-12"></div>');
  // wrapper.append(Header(_ => render(root)));
    wrapper.append(GamePlay(_ => render(root)));
    // wrapper.append(Image(_ => render(root)));
  root.append(wrapper);
}

const state = {
  coder: null,
  selectedCoder: null
};

$(_ => {
  getJSON('coders.json', (err, json) => {
    if (err) { return alert(err.message);}
    state.coder = json;
    const root = $('.root');
    render(root);
  });
});
