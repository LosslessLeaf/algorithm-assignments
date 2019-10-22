let deckOrder = generateDeck();

function pickWinner() {
	let hand1 = [],
		hand2 = [];
	let sum1 = 0,
		sum2 = 0;
	for (let i = 0; i < 7; i++) {
		hand1.push(drawCard());
		hand2.push(drawCard());
	}
	// console.log(hand1, hand2);

	hand1.forEach(x => {
		sum1 += x[1];
	});
	hand2.forEach(x => {
		sum2 += x[1];
	});
	// let hand1 = deckOrder.splice(0, 7);
	// let hand2 = deckOrder.splice(0, 7);
	// let hand1 = drawCard();
	// console.log(hand1, hand2);
	// // let reducer = (x, y) => x[1] + y;
	// let sum1 = 0;
	// let sum2 = 0;
	// for (let i = 0; i < 7; i++) {
	// 	sum1 += hand1[i][1];
	// 	sum2 += hand2[i][1];
	// }
	// let sum1 = hand1.reduce(reducer, 0);
	// let sum2 = hand2.reduce(reducer, 0);

	let suits = ["clubs", "hearts", "diamonds", "spades"];

	for (let i = 0; i < 7; i++) {
		for (let j = 0; j < suits.length; j++) {
			if (hand1[i][0] == j) {
				hand1[i][0] = suits[j];
			}
			if (hand2[i][0] == j) {
				hand2[i][0] = suits[j];
			}
		}
	}

	console.log(`Player 1: [${hand1}], Player 2: [${hand2}]`);
	sum1 > sum2 ? console.log("Player 1 won!") : console.log("Player 2 won!");
}

function generateDeck() {
	let currentOrder = [];

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 13; j++) {
			currentOrder.push([i, j]);
		}
	}

	let shuffled = shuffle(currentOrder);
	// console.log(shuffled);
	return shuffled;
}

function shuffle(array) {
	let cardsLeft = array.length;
	let randomCardPosition = 0;
	let tempCard;
	while (cardsLeft) {
		randomCardPosition = Math.floor(Math.random() * cardsLeft--);

		tempCard = array[cardsLeft];

		array[cardsLeft] = array[randomCardPosition];
		array[randomCardPosition] = tempCard;
	}

	return array;
}

function drawCard() {
	let card = deckOrder.pop();
	return card;
}

pickWinner();

// function generateHand() {
// 	let handArray = [];
// 	for (let i = 0; i < 7; i++) {
// 		handArray.push(Math.round(Math.random() * 13));
// 	}
// 	return handArray;
// }
