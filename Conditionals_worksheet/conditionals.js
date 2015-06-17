// Nowa Ito
// 6/16/15
// Conditionals worksheet

/*
// Celsius and Fahrenheit converter
var temperature = Number(prompt("What is the temperature without the unit?"));
var unit = prompt("What unit is the temperature in? Celsius (C) or Fahrenheit (F)");

if(unit == "C" || unit == "c"){
	temperature = temperature * 9 / 5 + 32
	console.log("The converted temperature from Celsius is " + temperature + " degrees in Fahrenheit.");
}else if(unit == "F" || unit == "f"){
	temperature = (temperature - 32) * 5 / 9
	console.log("The converted temperature from Fahrenheit is " + temperature + " degrees in Celsius.");
}

/*  Ternary option
unit = (unit === "C" || unit === "c") ? "The temperature is " + (((temperature * 9) / 5) + 32) + " degrees in Fahrenheit." : "The temperature is " + (temperature -32) * 5 / 9 + " degrees in Celsius.";
console.log(unit);
*/

/*
// Last chance for gas!
var efficiency = Number(prompt("What's your miles per gallon?"));
var gasLeft = .01 * Number(prompt("How much gas do you have in your tank? (In %)"));
var capacity = Number(prompt("How much gas can the tank hold? (In Gallons)"));

var current = capacity * gasLeft;
var distance = current * efficiency

if(distance >= 200){
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have " + current + " gallons of gas in your tank, better get gas now while you can!");
}
*/

//Grade Letter Calculator
var grade = Number(prompt("What is your grade in percentage??"));
if(grade >= 95){
	console.log("You have a " + grade + "%, which means you have earned an A+ in the class!");
}else if(grade >= 90){
	console.log("You have a " + grade + "%, which means you have earned an A in the class!");
}else if(grade >= 85){
	console.log("You have a " + grade + "%, which means you have earned an B+ in the class!");
}else if(grade >= 80){
	console.log("You have a " + grade + "%, which means you have earned an B in the class!");
}else if(grade >= 76){
	console.log("You have a " + grade + "%, which means you have earned an C+ in the class.");
}else if(grade >= 73){
	console.log("You have a " + grade + "%, which means you have earned an C in the class.");
}else if(grade >= 70){
	console.log("You have a " + grade + "%, which means you have earned an D in the class.");
}else if(grade >= 0){
	console.log("You have a " + grade + "%, which means you have earned an F in the class.");
}



