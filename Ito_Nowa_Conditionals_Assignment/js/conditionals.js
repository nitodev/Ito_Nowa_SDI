


var weight = Number(prompt("What is your weight? (lb)"));
	if(weight == ""){
		weight = Number(prompt("Please type in your weight. (lb)"));
	}
var time = Number(prompt("How long is the bike ride? (min.)"));
	if(time == ""){
		time = Number(prompt("Please type in your duration. (min.)"));
	}
var met = Number(prompt("How fast is your bike ride? (mph)"));
	if(met == ""){
		met = Number(prompt("Please type in your speed. (mph)"));
	}

weight = Math.round(weight / 2.2)


if(met >= 15){
	met = 8; // easy
}else if(met >= 16 && met <= 17){
	met = 10; // normal
}else if(met >= 18 && met <= 19){
	met = 11; // above average
}else if(met === 20 || met === 21){
	met = 12; // medium
}else if(met === 22 || met === 23){
	met = 13; // fast
}else if(met === 24 || met === 25){
	met = 14; //road race
}else if(met >= 26 && met <= 30){
	met = 15; // circuit level
}else if(met > 30){
	alert("You're going too fast!!!");
}

var calPerMin = 0.0175 / weight / time * met * weight;
var result = calPerMin * time;
console.log("You burned " + result + " calories in " + time + " minutes.");

}else{
	var time = Number(prompt("How long is the bike ride? (min.)"));
}if(time == ""){
	time = Number(prompt("Please type in the duration. (min.)"));
}else{
	var met = Number(prompt("How fast is your bike ride? (mph)"));
}if(met == ""){
	met = Number(prompt("Please type in the speed. (mph)"))
}