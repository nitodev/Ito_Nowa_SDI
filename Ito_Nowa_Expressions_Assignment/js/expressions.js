/* Nowa Ito
	6/11/2015
	SDI Section 1
	Expressions Assignment
*/
//multiplication 
var array1 = [prompt("Input the speed in MPH:"), prompt("Input your time of travel in hours:")]; // input for mph and hours of travel time
var math = Number(array1[0]); // assigning array1[0] to a variable
math *= Number(array1[1]); // using multiplication operator
alert("You will travel " + math + " Miles."); // alerting the result
console.log("The total distance traveled is " + math + " Miles!"); // logging the result


//addition
var array2 = [prompt("Type your first value for the side of triangle in 'cm':"), prompt("Type your second value for the side of triangle in 'cm':"), prompt("Type your third value for the side of triangle in 'cm':")]; // input for the data of triangle
var math2 = Number(array2[0]) + Number(array2[1]); // adding the numbers for perimeter
math2 += Number(array2[2]);
alert("The perimeter of the triangle is " + math2 + "cm."); // alert for the result
console.log("The perimeter of the triangle is " + math2 + "cm."); // logging the result
