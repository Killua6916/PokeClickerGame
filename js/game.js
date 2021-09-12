// Game Variables
var count = 0;
var value = 1;
var greatballCost = 100;
var greatballs = 0;
var ultraballCost = 500;
var ultraballs = 0;
var premierballCost = 1000;
var premierballs = 0;
var fastballCost = 2500;
var fastballs = 0;
var dreamballCost = 7500;
var dreamballs = 0;
var heavyballCost = 15000;
var heavyballs = 0;
var timerballCost = 25000;
var timerballs = 0;
var beastballCost = 75000;
var beastballs = 0;
var masterballCost = 100000;
var masterballs = 0;

// -----------------------------------------------------------------------------------//

/* User clicks the Pokeball */
function findPokeballs(amountOfPokeballs) {
  count = count + value + amountOfPokeballs;
  document.getElementById("count").innerHTML = count;
  document.getElementById("value").innerHTML = value;
  document.getElementById("ammountOfPokeballs").innerHTML = amountOfPokeballs;
}

// Buy Greatballs
function buyGreatballs() {
if(count >= greatballCost && greatballs == 0) {
 value = 2;
  greatballs = 1;
  count = count - greatballCost;
  document.getElementById("greatballCost").innerHTML = greatballCost;
  document.getElementById("greatballs").innerHTML = greatballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (greatballs == 1) {
   alert("You have already purchased a greatball");
  } else {
  alert("You cannot puchase a greatball");
  }
 }

// Buy Ultraballs
function buyUltraballs() {
if(count >= ultraballCost && ultraballs == 0) {
 value = 4;
  ultraballs = 1;
  count = count - ultraballCost;
  document.getElementById("ultraballCost").innerHTML = ultraballCost;
  document.getElementById("ultraballs").innerHTML = ultraballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (ultraballs == 1) {
   alert("You have already purchased a Ultraball");
  } else {
  alert("You cannot puchase a Ultraball");
  }
 }

// Buy Premierballs
function buyPremierballs() {
if(count >= premierballCost && premierballs == 0) {
 value = 6;
  premierballs = 1;
  count = count - premierballCost;
  document.getElementById("premierballCost").innerHTML = premierballCost;
  document.getElementById("premierballs").innerHTML = premierballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (premierballs == 1) {
   alert("You have already purchased a Premierball");
  } else {
  alert("You cannot puchase a Premierball");
  }
 }

// Buy Fastballs
function buyFastballs() {
if(count >= fastballCost && fastballs == 0) {
 value = 8;
  fastballs = 1;
  count = count - fastballCost;
  document.getElementById("fastballCost").innerHTML = fastballCost;
  document.getElementById("fastballs").innerHTML = fastballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (fastballs == 1) {
   alert("You have already purchased a Fastball");
  } else {
  alert("You cannot puchase a Fastball");
  }
 }

// Buy Dreamballs
function buyDreamballs() {
if(count >= dreamballCost && dreamballs == 0) {
 value = 10;
  dreamballs = 1;
  count = count - dreamballCost;
  document.getElementById("dreamballCost").innerHTML = dreamballCost;
  document.getElementById("dreamballs").innerHTML = dreamballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (fastballs == 1) {
   alert("You have already purchased a Dreamball");
  } else {
  alert("You cannot puchase a Dreamball");
  }
 }

// Buy Heavyballs
function buyHeavyballs() {
if(count >= heavyballCost && heavyballs == 0) {
 value = 12;
  heavyballs = 1;
  count = count - heavyballCost;
  document.getElementById("heavyballCost").innerHTML = heavyballCost;
  document.getElementById("heavyballs").innerHTML = heavyballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (heavyballs == 1) {
   alert("You have already purchased a Heavyball");
  } else {
  alert("You cannot puchase a Heavyball");
  }
 }

// Buy Timerballs
function buyTimerballs() {
if(count >= timerballCost && timerballs == 0) {
 value = 14;
  timerballs = 1;
  count = count - timerballCost;
  document.getElementById("timerballCost").innerHTML = timerballCost;
  document.getElementById("timerballs").innerHTML = timerballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (timerballs == 1) {
   alert("You have already purchased a Timerball");
  } else {
  alert("You cannot puchase a Timerball");
  }
 }

// Buy Beastballs
function buyBeastballs() {
if(count >= beastballCost && beastballs == 0) {
 value = 16;
  timerballs = 1;
  count = count - beastballCost;
  document.getElementById("beastballCost").innerHTML = beastballCost;
  document.getElementById("beastballs").innerHTML = beastballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (beastballs == 1) {
   alert("You have already purchased a Beastball");
  } else {
  alert("You cannot puchase a Beastball");
  }
 }

// Buy Masterballs
function buyMasterballs() {
if(count >= masterballCost && masterballs == 0) {
 value = 16;
  masterballs = 1;
  count = count - masterballCost;
  document.getElementById("masterballCost").innerHTML = masterballCost;
  document.getElementById("masterballs").innerHTML = masterballs;
  document.getElementById("count").innerHTML = count;
  document.getElememtById("value").innerHTML = value;
  } else if (masterballs == 1) {
   alert("You have already purchased a Masterball");
  } else {
  alert("You cannot puchase a Masterball");
  }
 }

// ----------------------------------- Save Game/Load Game/Reset Game --------------------------------//
function saveGame() {
  var gameSave = {
    count: count,
    value: value,
    amountOfPokeballs: amountOfPokeballs,
    greatballs: greatballs,
    greatballCost: greatballCost,
    ultraballs: ultraballs,
    ultraballCost: ultraballCost,
    premierballs: premierballs,
    premierballCost: premierballCost,
    fastballs: fastballs,
    fastballCost: fastballCost,
    dreamballs: dreamballs,
    dreamballCost: dreamballCost,
    heavyballs: heavyballs,
    heavyballCost: heavyballCost,
    timerballs: timerballs,
    timerballCost: timerballCost,
    beastballs: beastballs,
    beastballCost: beastballCost,
    masterballs: masterballs,
    masterballCost: masterballCost
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

setInterval(function() {
  saveGame();
}, 1000); //saves every 1 seconds

// Load Game
function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.count !== "undefined") count = savedGame.count;
  if (typeof savedGame.value !== "undefined") value = savedGame.value;
  if (typeof savedGame.amountOfPokeballs !== "undefined") amountOfPokeballs = savedGame.amountOfPokeballs;
  if (typeof savedGame.greatballs !== "undefined") greatballs = savedGame.greatballs;
  if (typeof savedGame.greatballCost !== "undefined") greatballCost = savedGame.greatballCost;
  if (typeof savedGame.ultraballs !== "undefined") ultraballs = savedGame.ultraballs;
  if (typeof savedGame.ultraballCost !== "undefined") ultraballCost = savedGame.ultraballCost;
  if (typeof savedGame.premierballs !== "undefined") premierballs = savedGame.premierballs;
  if (typeof savedGame.premierballCost !== "undefined") premierballCost = savedGame.premierballCost;
  if (typeof savedGame.fastballs !== "undefined") fastballs = savedGame.fastballs;
  if (typeof savedGame.fastballCost !== "undefined") fastballCost = savedGame.fastballCost;
  if (typeof savedGame.dreamballs !== "undefined") dreamballs = savedGame.dreamballs;
  if (typeof savedGame.dreamballCost !== "undefined") dreamballCost = savedGame.dreamballCost;
  if (typeof savedGame.heavyballs !== "undefined") heavyballs = savedGame.heavyballs;
  if (typeof savedGame.heavyballCost !== "undefined") heavyballCost = savedGame.heavyballCost;
  if (typeof savedGame.timerballs !== "undefined") timerballs = savedGame.timerballs;
  if (typeof savedGame.timerballCost !== "undefined") timerballCost = savedGame.timerballCost;
  if (typeof savedGame.beastballs !== "undefined") beastballs = savedGame.beastballs;
  if (typeof savedGame.beastballCost !== "undefined") beastballCost = savedGame.beastballCost;
  if (typeof savedGame.masterballs !== "undefined") masterballs = savedGame.masterballs;
  if (typeof savedGame.masterballCost !== "undefined") masterballCost = savedGame.masterballCost;
}

//Load Save Game
window.onload = function() {
document.getElementById("count").innerHTML = count;
document.getElementById("value").innerHTML = value;
document.getElememtById("amountOfPokeballs").innerHTML = amountOfPokeballs;
document.getElementById("greatballCost").innerHTML = greatballCost;
document.getElementById("greatballs").innerHTML = greatballs;
document.getElementById("greatballCost").innerHTML = greatballCost;
document.getElementById("ultraballCost").innerHTML = ultraballCost;
document.getElementById("ultraballs").innerHTML = ultraballs;
document.getElementById("premierballCost").innerHTML = premierballCost;
document.getElementById("premierballs").innerHTML = premierballs;
document.getElementById("fastballCost").innerHTML = fastballCost;
document.getElementById("fastballs").innerHTML = fastballs;
document.getElementById("dreamballCost").innerHTML = dreamballCost;
document.getElementById("dreamballs").innerHTML = dreamballs;
document.getElementById("heavyballCost").innerHTML = heavyballCost;
document.getElementById("heavyballs").innerHTML = heavyballs;
document.getElementById("timerballCost").innerHTML = timerballCost;
document.getElementById("timerballs").innerHTML = timerballs;
document.getElementById("beastballCost").innerHTML = beastballCost;
document.getElementById("beastballs").innerHTML = beastballs;
document.getElementById("masterballCost").innerHTML = masterballCost;
document.getElementById("masterballs").innerHTML = masterballs;
loadGame(); 
findPokeballs();
};

//Reset Game 
function resetGame() {
 if(confirm("Are you sure you want to reset your game?")) {
  var gameSave = {};
   localStorage.setItem("gameSave", JSON.stringify(gameSave));
   location.reload();
 }
}
