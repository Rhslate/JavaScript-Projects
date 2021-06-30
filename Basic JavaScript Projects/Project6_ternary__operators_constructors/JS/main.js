function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function Vote_Function() {
    var Height, Can_vote;
    Age = document.getElementById("Age").Value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Breed, Year, Color) {
    this.Dog_Color = Color;
    this.Dog_Breed = Breed;
    this.Dog_Year = Year;
}
var Rachel = new Dog("Border Collie", 2020, "Black and White");
var Sarah = new Dog("Basset Hound", 2019, "White and Tan");
var Emily = new Dog("Springer Spaniel", 2021, "Brown and Tan");
function myFunction_2() {
    document.getElementById("New_and_This").innerHTML =
    "Rachel has a " + Rachel.Dog_Color + "-colored " + Rachel.Dog_Breed +
    " rescued in " + Rachel.Dog_Year;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}