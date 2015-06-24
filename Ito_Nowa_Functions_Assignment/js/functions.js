//Nowa Ito
//6/24/15
//functions assignment


var question = prompt("Type 'PB' for Powerball, otherwise, type 'FL' for Florida Lottery.");
while(question == ""){
	question = prompt("Please type 'PB' for Powerball, otherwise, type 'FL' for Florida Lottery.");
}if(question === "PB" || question === "pb" || question === "FL" || question === "fl"){
	if(question === "PB" || question === "pb"){
		question = "Powerball";
		console.log("You have entered " + question + "!");
	}if(question === "FL" || question === "fl"){
		question = "Florida Lottery";
		console.log("You have entered " + question + "!");
	}
}else{
	console.log("You did not enter valid letters. Please try again.");
}

function numbersPB(PB){
	var randomArray = [];
	for (var i = 0; i <= 4; i++){
		var randomPB = Math.round(Math.random() * (59 - 1) + 1);
		randomArray[i] = randomPB
	}
	var pB = Math.round(Math.random() * (35 - 1) + 1);
	var result = String(randomArray + " PB: " + pB);
	return result;
}


function numbersFL(FL){

}


var test = numbersPB();
console.log(test);