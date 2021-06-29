function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //The animal sound "Bark" is displayed on the screen when "Click me!" is clicked

}

function my_Dictionary_2() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //This deletes the sound "Bark" from the code, and outputs "Undefined" when "Click me!" is clicked
    document.getElementById("Dictionary").innerHTML = Animal.Sound;

}

