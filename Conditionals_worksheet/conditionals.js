// Nowa Ito
// 6/16/15
// Conditionals worksheet

var temperature = Number(prompt("What is the temperature without the unit?"));
var unit = prompt("What unit is the temperature in? Celsius (C) or Fahrenheit (F)");
/*
if(unit == "C" || unit == "c"){
	temperature = temperature * 9 / 5 + 32
	console.log("The converted temperature from Celsius is " + temperature + " degrees in Fahrenheit.");
}else if(unit == "F" || unit == "f"){
	temperature = (temperature - 32) * 5 / 9
	console.log("The converted temperature from Fahrenheit is " + temperature + " degrees in Celsius.");
}
*/


unit = ("C" || "c") ? "The temperature is " + temperature + " degrees in Celsius." : "The temperature is " + temperature + " degrees in Fahrenheit.";
console.log(unit);

/////

