//Nowa Ito
//6/24/15
//functions assignment


var question = prompt("Type 'PB' for Powerball, otherwise, type 'FL' for Florida Lottery."); // asking for input
while(question == "" || question != "PB" || question != "pb" || question != "FL" || question != "fl"){ // condition
	if(question == "pb" || question == "PB" || question == "fl" || question == "FL"){ //condition to break
		break;
	}question = prompt("Please type 'PB' for Powerball, otherwise, type 'FL' for Florida Lottery."); //loop to get input
}if(question === "PB" || question === "pb"){ //condition
	console.log("You have entered Powerball!"); // output
	question = numbersPBFL(4, 1, 59, 1, 35); // values for function para.
	console.log("Your Powerball's lucky numbers are " + question); //final output
}else if(question === "FL" || question === "fl"){ //condition
	console.log("You have entered Florida Lottery!"); // output
	question = numbersPBFL(5, 1, 53, 0, 0); // values for function para.
	console.log("Your Florida Lottery's lucky numbers are " + question); //final output
}

function numbersPBFL(numbers, min, max, pBMin, pBMax){ // function w/ para.
	var randomArray = []; // creating array
	for (var i = 0; i <= numbers; i++){ //for-loop
		var randomPB = Math.round(Math.random() * (max - min) + min); //randomizing and rounded
		randomArray[i] = randomPB //storing value
	}
	if(pBMin >= 1 && pBMax <= 35){ // powerball
		var pB = Math.round(Math.random() * (pBMax - pBMin) + pBMin); // randomizing and rounded
		pB = " PB: " + pB; //concatenating
	}else{
		var pB = "" // for florida lotto
	}
	var set = String(randomArray + pB); // setting up the return value
	return set; // return set
}

