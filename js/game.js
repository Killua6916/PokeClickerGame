let pokeballs
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
if (localStorage.getItem("count")){
    pokeballs = parseInt(localStorage.getItem("count"))
} else{
    pokeballs = 0
}
document.getElementById('btn').addEventListener("click", iterate)
document.getElementById("counter").innerHTML = pokeballs
function findPokeballs(){
    pokeballs += 1
    localStorage.setItem("count", pokeballs)
    console.log(pokeballs)
    document.getElementById("counter").innerHTML = pokeballs
}

