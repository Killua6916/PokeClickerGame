var pokeballs = 0;
var quantity = 0;

function findPokeballs() {
  pokeballs = pokeballs + 1;
   quantity.innerHTML = pokeballs;
}

/* Save Game */
var save = {
 pokeballs: pokeballs,
 quantity: quantity
}

function save() {
  localStorage.setItem('pokeballs', JSON.stringify(pokeballs));
  localStorage.setItem('quantity', JSON.stringify(quantity));
}

/* Load Game */
function loadGame() {
  pokeballs = JSON.parse(localStorage.getItem('pokeballs'));
  quantity = JSON.parse(localStorage.getItem('quantity'));
}

