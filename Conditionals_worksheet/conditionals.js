// Nowa Ito
// 6/16/15
// Conditionals worksheet

/*
// Celsius and Fahrenheit converter----------------------------------------------------------------------------------------------------
var temperature = Number(prompt("What is the temperature without the unit?"));
var unit = prompt("What unit is the temperature in? Celsius (C) or Fahrenheit (F)");

if(unit == "C" || unit == "c"){
	temperature = temperature * 9 / 5 + 32
	console.log("The converted temperature from Celsius is " + temperature + " degrees in Fahrenheit.");
}else if(unit == "F" || unit == "f"){
	temperature = (temperature - 32) * 5 / 9
	console.log("The converted temperature from Fahrenheit is " + temperature + " degrees in Celsius.");
}


//Ternary option-----
//unit = (unit === "C" || unit === "c") ? "The temperature is " + (((temperature * 9) / 5) + 32) + " degrees in Fahrenheit." : "The temperature is " + (temperature -32) * 5 / 9 + " degrees in Celsius.";
//console.log(unit);
*/

/*
// Last chance for gas!------------------------------------------------------------------------------------------------------------------
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

/*
//Grade Letter Calculator------------------------------------------------------------------------------------------------------------------
var grade = Number(prompt("What is your grade in percentage??"));

var a1 = (grade >= 95 && grade <= 100); //A+
var a = (grade >= 90 && grade <= 94);  //A
var b1 = (grade >= 85 && grade <= 89); //B+
var b = (grade >= 80 && grade <= 84);  //B
var c1 = (grade >= 76 && grade <= 79); //C+
var c = (grade >= 73 && grade <= 75);  //C
var d = (grade >= 70 && grade <= 72);  //D
var f = (grade >= 0 && grade <= 69);   //F

if(a1){
	console.log("You have a " + grade + "%, which means you have earned an A+ in the class!");
}else if(a){
	console.log("You have a " + grade + "%, which means you have earned an A in the class!");
}else if(b1){
	console.log("You have a " + grade + "%, which means you have earned an B+ in the class!");
}else if(b){
	console.log("You have a " + grade + "%, which means you have earned an B in the class!");
}else if(c1){
	console.log("You have a " + grade + "%, which means you have earned an C+ in the class.");
}else if(c){
	console.log("You have a " + grade + "%, which means you have earned an C in the class.");
}else if(d){
	console.log("You have a " + grade + "%, which means you have earned an D in the class.");
}else if(f){
	console.log("You have a " + grade + "%, which means you have earned an F in the class.");
}
*/

/*
//Check the login------------------------------------------------------------------------------------------------------------------------------
var name = prompt("Type in your username:");
var pass = prompt("Type in your password:");
if(name === prompt("Re-enter your username:")){
	if(pass === prompt("Re-enter your password:")){
		console.log("Welcome, " + name + "!");
	}else{
		console.log("Password does not match our records.");
	}
}else{
	console.log("User not found. Try again.");
}


//Ternary option--------------------
//var nameConfirmation;
//nameConfirmation = (name === prompt("Re-enter your username") && pass === prompt("Re-enter your password")) ? "Welcome, " + name + "!" : "Please make sure username/password is valid.";
//console.log(nameConfirmation);
*/

/*
//Tire Pressure -----------------------------------------------------------------------------------------------------------------------------------
var pressure = [prompt("Input the psi for front left tire"), prompt("Input the psi for front right tire"), prompt("Input the psi for rear left tire"), prompt("Input the psi for rear right tire")];

var tires;
tires = (pressure[0] === pressure[1] && pressure[2] === pressure[3]) ? "The tires pass spec!" : "Get your tires checked out!";
console.log(tires);

/*
//Option 2------------------------
if(pressure[0] === pressure[1]){
	if(pressure[2] === pressure[3]){
		console.log("The tires pass spec!!!");
	}else{
		console.log("Get your tires checked out!!!");
	}
}else{
	console.log("Get your tires checked out!!!");
}
*/

/*
//Movie ticket price-------------------------------------------------------------------------------------------------------------------------------
var time = Number(prompt("What time are you going to the threater?"));
var age = Number(prompt("What is your age??"));
if(age >= 55 || age <= 10){
	console.log("The ticket price is $7");
}else if(time <= 5 && time >= 3){
	console.log("The ticket price is $7");
}else{
	console.log("The ticket price is $12");
}
*/



