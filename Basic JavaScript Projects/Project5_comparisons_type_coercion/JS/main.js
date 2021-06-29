document.write(typeof "dog"); //Type of operator, output is String

document.write("20" + 25); //Output number is 2025, because JavaScript tacks on the last number on to the first number that was typed

function my_Function() { //Nan, not a number, because you can't devide 0 by 0
    document.getElementById("Test").innerHTML = 0/0;
}


function my_Function_2() { //True, because "This is a string" is not a number
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}


function my_Function_3() { //False, because 007 is a number
    document.getElementById("Test").innerHTML = isNaN('007');
}

document.write(2E310); //Positive Infinity

document.write(-3E310); //Negative Infinity

document.write(10 > 2); //Output is "true" because 10 is larger than 2

document.write(10 < 2); //Output is "false" because 10 is larger than 2

console.log(2 + 2); //This debuggs your code in the HTML browser

console.log(2 < 1); //This debuggs your code in the HTML browser

console.log(2 > 1); //This debuggs your code in the HTML browser

document.write(10 == 10); //The output is "true" because 10 is equal to 10

document.write(3 == 11); //The output is "false" because 3 is not equal to 11

X = 10;
Y = 10;
document.write(X === Y); //This tells the computer to check whether the two pieces of data are equal in value on both value and type. The output for this equation is "true"

X = 82;
Y = "82";
document.write(X === Y); //This tells the computer to check whether the two pieces of data are equal in value on both value and type. The output for this equation is "false"

A = "Magnus";
B = "Magnus";
document.write(A === B); //This tells the computer to check whether the two pieces of data are equal in value on both value and type. The output for this equation is "true"

document.write(5 > 2 && 10 > 4); //&& operator determines the logic between values or variables, and varifies that they are true or false 

document.write(5 > 10 && 10 > 4); //&& operator determines the logic between values or variables, and varifies that they are true or false 

document.write(5 > 10 || 10 > 4); //This symbol || means OR. This equation equals "true" in this instance, because 10 is greater than 4

document.write(5 > 10 || 10 > 20); ////This symbol || means OR. This equation equals "false" in this instance because neither is true 

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); //! is a "not" operator. This equation returns a "false" statement, because you are saying that 20 is NOT greater than 10
}

function not_Function() { //This is a double negative, because you are telling the computer that 5 is NOT greater than 10, and this results in it being a TRUE statement
    document.getElementById("Not").innerHTML = !(5 > 10);
}