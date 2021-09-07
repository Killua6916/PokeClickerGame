var pokeballs = 0;

function findPokeballs() {
  pokeballs = pokeballs + 1;
   quantity.innerHTML = pokeballs;
}

/* Save Game */
var save = {
 pokeballs: pokeballs,
 quantity: quantity
}
localStorage.setItem("save",JSON.stringify(save));

/* Load Game */
var saveGame = JSON.parse(localStorage.getItem("save"));
if (typeof saveGame.pokeballs !== "undefined") pokeballs = saveGame.pokeballs;

