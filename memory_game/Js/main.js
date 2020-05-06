//console.log("Up and running!");
let cards = [
	{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/back.png"
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/back.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/back.png"
	},
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/back.png"
	}
	
]

let cardsInPlay = [];



let checkForMatch = function() {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}


let flipCard = function() {
	 cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	if (cardsInPlay.length === 4) {
		checkForMatch();
	}
	console.log("User flipped" + " " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	
	}

	let createBoard = function() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();












