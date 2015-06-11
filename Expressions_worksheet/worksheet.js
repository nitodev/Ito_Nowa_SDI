/* Nowa Ito
	SDI 1506 Section 1
	Expressions Worksheet
*/


// Dog Years
var sparkyAge = prompt("How old is Sparky?"); // input age in human years
var age = Number(sparkyAge) * 7; // age input * 7
alert("Sparky is " + age + " in dog years."); // output calculation
console.log("Sparky is " + sparkyAge + " human years old, which is " + age + " in dog years.");


//------------------------------help--------------------------------------

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

//-----------------------------------------------------------------------


// Average shopping bill
var setArray = [prompt("week 1 spending"), prompt("week 2 spending"), prompt("week 3 spending"), prompt("week 4 spending"), prompt("week 5 spending")]; // arrays with prompts for input of $$
var total = (Number(setArray[0]) + Number(setArray[1]) + Number(setArray[2]) + Number(setArray[3]) + Number(setArray[4])); // total $ for 5 weeks
var average = total / setArray.length; // total divided by the length of array (5)
alert("Total amount spend on groceries is $" + total); // result of total
alert("The average weekly spending on grocery is $" + average); // result of average
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");



// Discounts
var item = prompt("What is your item?"); // input for item name
var tag = prompt("What is the price on tag?"); // input for original $
var discount = prompt("What is the discount percentage? Excluding '%'"); // input for discount %
var tax = prompt("What is the sales tax percentage? Excluding '%'"); // input for tax %

var discountPerc = Number(discount * .01); // converting % to decimal
var taxPerc = Number(tax * .01); // converting % to decimal

var priceWithDisc = Number(tag) - Number(tag * discountPerc); // price with discount calculated
var priceWithTax = Number(priceWithDisc * taxPerc) + priceWithDisc; // price with discount + tax calculated
alert("Your " + item + " was originally $" + tag + ", but after a " + discount + "% discount, it is now $" + priceWithDisc + " without tax, and $" + priceWithTax + " with tax.");
console.log("Your " + item + " was originally $" + tag + ", but after a " + discount + "% discount, it is now $" + priceWithDisc + " without tax, and $" + priceWithTax + " with tax.")
