function full_Sentence() { //This method concatenates (connects) two or more strings
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //A string method that extracts a section of a string and then returns the extracted section in a new string
    var Sentence = "All work and no play makes Johnny a dull boy."; //I appreciate this so much! Hahaha! I love Horror movies
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() { //Assists with working with numbers 
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //This formats a number to a specified lenght
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}