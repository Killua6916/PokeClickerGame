//script.js
let x = 0
document.getElementById("counter").innerHTML = x
document.getElementById('btn').addEventListener("click", iterate)
function iterate(){
    x += 1
    console.log(x)
    document.getElementById("counter").innerHTML = x
}

let x
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
if (localStorage.getItem("count")){
    x = parseInt(localStorage.getItem("count"))
} else{
    x = 0
}
document.getElementById('btn').addEventListener("click", iterate)
document.getElementById("counter").innerHTML = x
function iterate(){
    x += 1
    localStorage.setItem("count", x)
    console.log(x)
    document.getElementById("counter").innerHTML = x
}
