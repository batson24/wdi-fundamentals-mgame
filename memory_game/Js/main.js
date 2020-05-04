console.log("Up and running!");
let cards = ["Queen", "Queen", "King", "King"];

const cardsInPlay = [];

let checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}


let flipCard = function() {
	
	console.log("User flipped" + " " +cards[0]);
	cardsInPlay.push(cards[0]);
	console.log("User flipped" + " " +cards[2]);
	checkForMatch();
	
}
flipCard();












