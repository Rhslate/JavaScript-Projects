function addition_Function() { //Performing addition 
    var addition = 2+2;
    document.getElementById("Math").innerHTML= "2 + 2 = " + addition;
}

function subtraction_Function() {//Performing subtraction 
    var Subtraction = 5-2;
    document.getElementById("Math").innerHTML= "5 - 2 = " + Subtraction;
}

function multiplication() { //Performing multiplication  
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 =" + simple_Math;
}

function division() { //Performing devision 
    var simple_Math = 48/6;
    document.getElementById("Math").innerHTML = "48 / 6 =" + simple_Math;
}

function more_Math() { //Multiple math operations at once 
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "(1 + 2) * 10 / 2 - 5=" + simple_Math; 
}

function modulus_Operator() { //“Modulus” is the remainder after the dividend is divided by the divisor.The % symbol represents the modulus operator – which could also be called the remainder operator.
var simple_Math = 25 % 6;
document.getElementById("Math").innerHTML = "25 % 6 =" + simple_Math;
}

function negation_Operator() { //This returns the opposite or negative form of something
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}


function increment_Operator() { //To increase or to reduce by discrete amounts
var X = 5;
X++;
document.write(X);
}


function decrement_Operator() { //To decrease or to reduce by discrete amounts
var X = 5.25;
X--;
document.write(X);  
}

window.alert(Math.random()); //To return a random number between 0 and 1

window.alert(Math.random() * 100); //To have a random number displayed between 0 and 100