var purple="The Slates."; //Defininf a function and naming it //Giving it a string value
var purple = purple.fontcolor("purple");
document.write(purple);//Putting the value of result into HTML element with "purple" id



function myfunction() { //Defining a function and naming it
    var string = "This text is purple!"; //Defining a variable and giving it a string value

    var result = string.fontcolor("purple"); //Using the fontcolor method on string variable

document.getElementById("Purple_text") .innerHTML = result; //Putting the value of the result into HTML
                                                            //element with "Purple_text" id
}



function myFunction() { //Defining a function and naming it

    var sentence = "I am learning";
    sentence += " a lot from this book!"; //Operator to concatenate a string
    document.getElementById("Concatenate") .innerHTML = sentence; //Paragraph element
         //is called from the HTML document, to create "myFunction".
         //innerHTML modifies the content of the HTML element
                        
}