// Nowa Ito
// 6/23/15
// Functions worksheet

var radius = Number(prompt("enter the radius:"));

function circle(r){
	return radius * Math.PI * 2;
}

var result = circle(radius);
console.log("The circumference of the circle is " + result);