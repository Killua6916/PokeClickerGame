//initial number of cookies    
var num = 0;

/* window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name;
} */

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic Volts upgrade to 2x
    if(num >= 1000 ){
        num += 1;
        upgradeLevel.innerHTML = "Volt Level";
    }
}
