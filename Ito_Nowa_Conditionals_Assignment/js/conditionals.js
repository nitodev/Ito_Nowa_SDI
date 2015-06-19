


var weight = Number(prompt("What is your weight? (lb)"));
	if(weight == ""){
		weight = Number(prompt("Please type in your weight. (lb)"));
	}
var time = Number(prompt("How long is the bike ride? (min.)"));
	if(time == ""){
		time = Number(prompt("Please type in your duration. (min.)"));
	}
var speed = Number(prompt("How fast is your bike ride? (mph)"));
	if(speed == ""){
		met = Number(prompt("Please type in your speed. (mph)"));
	}

var calPerHour = ((speed * weight * .0053) + (.0083 * (Math.pow(speed, 3)))) * 7.2;
calPerHour = Math.round((calPerHour / 60) * time);

if(weight == "" || time == "" || speed == ""){
	console.log("You didn't input anything...");
}else if(isFinite(weight) && isFinite(time) && isFinite(speed)){
	var result;
	result = (!isNaN(weight) && !isNaN(time) && !isNaN(speed)) ? "You burned " + calPerHour + " calories in " + time + " minutes." : "You must type a valid number(s)";
	console.log(result);
}else{
	console.log("Please try again.");
}


