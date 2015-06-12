/* Nowa Ito
	6/11/2015
	SDI Section 1
	Expressions Assignment
*/

var array1 = [prompt("Type your first value for multiplication:"), prompt("Type your second value for multiplication:")];
var math = Number(array1[0]) * Number(array1[1]);
alert("The answer is " + math);
var step2 = prompt("Type your third value for multiplication if applicable. If not, disregard.");
math *= Number(step2);
alert("The answer is " + math);
console.log("The total value by multiplication is " + math);

