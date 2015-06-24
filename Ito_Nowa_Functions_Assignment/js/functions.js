//Nowa Ito
//6/24/15
//functions assignment


var question = prompt("Type 'PB' for Powerball, otherwise, type 'FL' for Florida Lottery.");
while(question == ""){
	question = prompt("Please type 'PB' for Powerball, otherwise, type 'FL' for Florida Lottery.");
}if(question === "PB" || question === "pb" || question === "FL" || question === "fl"){
	if(question === "PB" || question === "pb"){
		question = numbersPBFL(4, 1, 59, 1, 35);
		console.log("You have entered Powerball!");
		var result = question;
		console.log("Your lucky Powerball numbers are " + result);
	}if(question === "FL" || question === "fl"){
		question = numbersPBFL(5, 1, 53, 0, 0);
		console.log("You have entered Florida Lottery!");
		var result = question;
		console.log("Your lucky Florida Lottery numbers are " + result);
	}
}else{
	console.log("You did not enter valid letters. Please try again.");
}

function numbersPBFL(numbers, min, max, pBMin, pBMax){
	var randomArray = [];
	for (var i = 0; i <= numbers; i++){
		var randomPB = Math.round(Math.random() * (max - min) + min);
		randomArray[i] = randomPB
	}
	if(pBMin >= 1 && pBMax <= 35){
		var pB = Math.round(Math.random() * (pBMax - pBMin) + pBMin);
		pB = " PB: " + pB;
	}else{
		var pB = "" 
	}
	var result = String(randomArray + pB);
	return result;
}

