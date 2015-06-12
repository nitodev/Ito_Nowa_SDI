/* Nowa Ito
	6/11/2015
	SDI Section 1
	Expressions Assignment
*/
//multiplication 
var array1 = [prompt("Type your first value for multiplication:"), prompt("Type your second value for multiplication:")];
var math = Number(array1[0]) * Number(array1[1]);
alert("The answer is " + math);
var step2 = prompt("Type your third value for multiplication if applicable. If not, disregard.");
math *= Number(step2);
alert("The answer is " + math);
console.log("The total value by multiplication is " + math);


//addition
var array2 = [prompt("Type your first value for addition:"), prompt("Type your second value for addition:"), prompt("Type your third value for addition")];
var math2 = array2[0] + array2[1] + array2[2];
alert("The total added value is " + math2);
console.log("The total value by addition is " + math2);
