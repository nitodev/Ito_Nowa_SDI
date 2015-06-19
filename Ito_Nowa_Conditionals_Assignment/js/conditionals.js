// Nowa Ito
// 6/18/2015
// Conditionals Assignment

var weight = Number(prompt("What is your weight? (lb)")); // weight
	if(weight == ""){ // condition
		weight = Number(prompt("Please type in your weight. (lb)")); // asking weight again if not entered
	}
var time = Number(prompt("How long is the bike ride? (min.)")); // time
	if(time == ""){ // condition
		time = Number(prompt("Please type in your duration. (min.)")); // asking time again if not entered
	}
var speed = Number(prompt("How fast is your bike ride? (mph)")); // speed 
	if(speed == ""){ //condition
		speed = Number(prompt("Please type in your speed. (mph)")); // asking speed again if not entered
	}


var calPerHour = ((speed * weight * .0053) + (.0083 * (Math.pow(speed, 3)))) * 7.2; // calculation forumula for calories burned by biking
calPerHour = Math.round((calPerHour / 60) * time); // result broken down to minutes (rounded)

if(weight == "" || time == "" || speed == ""){ // condition for logging the error
	console.log("You must input a number for all three prompts."); // logging to console
}else if(isFinite(weight) && isFinite(time) && isFinite(speed)){ // condition to make sure all three are numbers
	var result;  // creating variable for ternary
	result = (!isNaN(weight) && !isNaN(time) && !isNaN(speed)) ? "You burned " + calPerHour + " calories in " + time + " minutes." : "You must type a valid number(s)"; //condition for the sake of ternary
	console.log(result); // logging result
}else{
	console.log("Please try again by entering valid numbers."); // if the conditions on line 21 and 23 does not meet (i.e. inputting letters), logging this to console.
}






