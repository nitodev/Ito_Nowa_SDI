// Nowa Ito
// 6/16/15
// Conditionals worksheet

var temperature = Number(prompt("What is the temperature without the unit?"));
var unit = prompt("What unit is the temperature in? Celsius (C) or Fahrenheit (F)");
/*
if(unit == "C" || unit == "c"){
	console.log("The temperature is " + temperature + " degrees in Celsius.");
}else if(unit == "F" || unit == "f"){
	console.log("The temperature is " + temperature + " degrees in Fahrenheit.");
}
*/
unit = ("C" || "c") ? "The temperature is " + temperature + " degrees in Celsius." : "The temperature is " + temperature + " degrees in Fahrenheit.";
console.log(unit);