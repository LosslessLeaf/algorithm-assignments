// const readline = require("readline");

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// let password = Math.random() * Math.pow(10, 8);
// let guess = "";

// rl.question("Enter a guess: ", answer => {
// 	if (answer.length == 8 && !isNaN(answer)) {
// 		guess = answer;
// 	}

// 	console.log(guess);
// 	rl.close();
// });

function crackPass(guess, password) {
	let guessArr = guess.split("");
	let passwordArr = password.split("");
	let correctPosition = 0;

	// get correct position
	for (let i = 0; i < passwordArr.length; i++) {
		let guessChar = guess[i];
		let passChar = password[i];

		if (guessChar == passChar) {
			correctPosition++;
		}
	}

	let filterGuessArr = [];
	let filterPassArr = [];
	let correctSum = 0;

	for (let i = 0; i <= 9; i++) {
		filterGuessArr[i] = guessArr.filter(x => x == i);
		filterPassArr[i] = passwordArr.filter(x => x == i);
	}

	for (let i = 0; i <= 9; i++) {
		if (filterGuessArr[i].length - filterPassArr[i].length <= 0) {
			correctSum += filterGuessArr[i].length;
		} else if (filterGuessArr[i].length - filterPassArr[i].length > 0) {
			correctSum += filterPassArr[i].length;
		}
	}

	console.log(
		`Correct number of items: ${correctSum}, # of Correct Position: ${correctPosition}`
	);
}
// crackPass("1314", "1414");
// crackPass("1221", "2112");
crackPass("42468921", "42468920");
crackPass("88888888", "77777777");
crackPass("999888777", "777888999");
crackPass("1111", "1111");
crackPass("99991111", "11119999");

// console.log(
// 	`Number of correct ${i}'s in filterArr: ${filterArr[i].length}`
// );
// if (filterGuessArr[i].length == filterPassArr[i].length) {
// 	correctSum += filterArr[i].length;
// }
// console.log(
// 	`Number of ${i}'s: guess - ${filterGuessArr[i].length}, pass - ${
// 		filterPassArr[i].length
// 	}`
// );
