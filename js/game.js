let pokeballs
// if the key value pair exists, we set pokeballs equal to the stored value
// else, set pokeballs to 0
if (localStorage.getItem("count")){
    x = parseInt(localStorage.getItem("count"))
} else{
    pokeballs = 0
}
document.getElementById('btn').addEventListener("click", findPokeballs)
document.getElementById("counter").innerHTML = pokeballs
function findPokeballs(){
    pokeballs += 1
    localStorage.setItem("count", pokeballs)
    console.log(pokeballs)
    document.getElementById("counter").innerHTML = pokeballs
}
