// Nowa Ito
// 6/23/15
// Functions worksheet

// circumference
var radius = Number(prompt("enter the radius:"));

function circle(r){
	return radius * Math.PI * 2;
}

var result = circle(radius);
console.log("The circumference of the circle is " + result);

// stung!!
var weight = Number(prompt("What is the weight? (lb.)"));

function stingsPP(){
	var result2 = weight / 8.66666667;
	return result2;
}

var stings = stingsPP();
console.log("It takes " + stings + " to kill this animal.");