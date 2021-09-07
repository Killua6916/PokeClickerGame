var pokeballs = 0;

function findPokeballs() {
  pokeballs = pokeballs + 1;
  document.getElementById("pokeballs").innerHTML = pokeballs;
}

/* Save Game */
var save = {
 pokeballs: pokeballs
}

function save() {
  localStorage.setItem('pokeballs', JSON.stringify(pokeballs));
}

/* Load Game */
function loadGame() {
  pokeballs = JSON.parse(localStorage.getItem('pokeballs'));
}

