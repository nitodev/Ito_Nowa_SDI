/* Nowa Ito
	SDI 1506 Section 1
	Expressions Worksheet
*/

/*
// Dog Years
var sparkyAge = prompt("How old is Sparky?"); // input age in human years
var age = Number(sparkyAge) * 7; // age input * 7
alert("Sparky is " + age + " in dog years."); // output calculation
console.log("Sparky is " + sparkyAge + " human years old, which is " + age + " in dog years.");
*/


// Slice of Pie part 1

/* function totalSlices() {
	Number(numberOfPizza * numberOfSlices)
} */
var numberOfPizza = prompt("How many pizza was ordred?"); // input for # of pizza ordered
var numberOfSlices = prompt("How many slices per pizza?"); // input for # of slices per pizza
var people = prompt("How many people are at the party?"); // input for # of people present
var result = Number(numberOfPizza * numberOfSlices) / Number(people); // value of calculation
alert("Each person can have " + result + " slices."); // output/alert for the result
console.log("Each person ate " + result + " slices of pizza at the party."); 

// Slice of Pie part II
var remainder = result % 1;
var leftOver = Number(remainder) * Number(numberOfPizza * numberOfSlices);
alert(leftOver);