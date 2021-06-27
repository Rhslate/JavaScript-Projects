var purple="The Slates.";  //Defining a function and naming it //Giving it a string value
var purple = purple.fontcolor("purple");
document.write(purple);  //Putting the value
//of result into HTML element with "purple" id

var Family="The Slates", Dad="Daniel", Mom="Susan", Daughter="Rachel", Son="Andrew";
document.write(Mom);  //Defining a function and naming it //Giving it a string value

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);  //Putting the value
//of result into HTML element with "blue" id

document.write(10+10);  //Expression

function My_First_Function() {     //Defining a function and naming it
    var string = "This text is green!";   //Degining a variable and giving it a 
                                        //string value

    var result = string.fontcolor("green");  //Using the fontcolor method on
                                         //str variable
    document.getElementById("Green_Text") .innerHTML = result;  //Putting the value
                                                        //of result into HTML element with "Green_Text" id
}