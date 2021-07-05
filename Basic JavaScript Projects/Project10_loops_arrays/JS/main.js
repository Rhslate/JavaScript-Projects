function count_to_Ten() { //The program adds one number each time to the counter, because of the (X++) that was given. Meaning, the variable "X" was given a value of 1, and each time the computer looped through, it adds one number until it reaches 10, then the program stops. 
    var Digit = "";
    var X =1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("count_to_Ten").innerHTML = Digit;
}

function Call_Loop() { //Last in first out, this loop continuously checks the call stack to see if there are any functions that need to be run/executed. It adds to any function call it finds to the call stack, and executes each one in order  
    var Digit ="31";
    var X = 10;
    while (X < 31) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() { //This loop repeats until a specified condition takes place for a condition to be false
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function Dog_Pics() { //A collection of data, arranged in rows and columns, things related to each other that are stored together in a sequence 
    var Dog_Pictures = ["DogPic1.jpg","DogPic2.jpg","DogPic3.jpg","DogPic4.jpg"];
    Dog_Pictures[0] = "sleeping";
    Dog_Pictures[1] = "playing";
    Dog_Pictures[2] = "eating";
    Dog_Pictures[3] = "barking";
    document.getElementById("Dog_Pics").innerHTML = "In this picture, the dog is " +
    Dog_Pictures[2] + ".";
}

function constant_function() { //This creates a constant whose scope can be either global or local to the block in which it is declared
    const Flower_Arrangements = {type:"flowers", brand:"roses", color:"red"};
    Flower_Arrangements.color = "red";
    Flower_Arrangements.price = "$20";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Flower_Arrangements.type + " was " + Flower_Arrangements.price;
}

var X = 82; //Variables declaired outside of a function with (var) or (let) have global scope [can be accessed from anywhere in the program]. Variables declared within a function with (var) or (let) have function scope. 
document.write(X);
{
    let X =33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car= { //Let declares variables that can have block scope (blocks of code contained within curly brackets [commonly loops])
    make: "VolksWagen ",
    model: "Jetta GLI ",
    year: "2010 ",
    color: "black ",
    description:function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML=car.description();