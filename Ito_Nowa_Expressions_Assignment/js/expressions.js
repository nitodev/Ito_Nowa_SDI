/* Nowa Ito
	6/11/2015
	SDI Section 1
	Expressions Assignment
*/
//multiplication 
var array1 = [prompt("Input the speed in MPH:"), prompt("Input your time of travel in hours:")];
var math = Number(array1[0]);
math *= Number(array1[1]);
alert("You will travel " + math + " Miles.");
console.log("The total distance traveled is " + math + " Miles!");


//addition
var array2 = [prompt("Type your first value for the side of triangle in 'cm':"), prompt("Type your second value for the side of triangle in 'cm':"), prompt("Type your third value for the side of triangle in 'cm':")];
var math2 = Number(array2[0]) + Number(array2[1]) + Number(array2[2]);
alert("The perimeter of the triangle is " + math2 + "cm.");
console.log("The perimeter of the triangle is " + math2 + "cm.");
