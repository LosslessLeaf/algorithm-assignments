const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const dice = {
	hand: {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0
	},
	rollDie: currDie => {
		dice.hand[currDie] = Math.floor(Math.random() * 6 + 1);
	},
	rollAll: () => {
		for (die in dice.hand) {
			dice.hand[die] = Math.floor(Math.random() * 6 + 1);
		}
	},
	showDice: () => {
		let tempHand = [];
		let showIndex = [1, 2, 3, 4, 5];
		for (die in dice.hand) {
			tempHand.push(dice.hand[die]);
		}
		console.log(`|Index: | ${showIndex.join(" | ")} |`);
		console.log(`|Hand:  | ${tempHand.join(" | ")} |`);
	}
};

function startGame() {
	rl.question("Welcome to Yahtzee! Press enter to continue... ", answer => {
		console.log("_______________________");
		dice.rollAll();
		dice.showDice();
		console.log("_______________________");

		askReroll();
	});
}

function askReroll() {
	rl.question("Pick index(es) to reroll: ", answer => {
		let diceToReroll = answer.split(" ");
		console.log(diceToReroll);
		for (e in diceToReroll) {
			dice.rollDie(e);
		}
		// dice.rollDie(4);
		console.log(dice.hand);
		dice.showDice();
	});
}

startGame();
