const rl = require("readline-sync");

console.log("Attack phase: ");
let armorClass = parseInt(rl.question("Enter monster's armor class: "));
let modifier = parseInt(rl.question("Enter damage modifier: "));
let wepDamage = rl.question("Enter weapon damage (eg: '2d4' | '3d6'): ");

let d20Roll = Math.floor(Math.random() * 20) + 1;
let modified = d20Roll + modifier;

console.log("D20Roll: " + d20Roll);
console.log("Modified: " + modified);
if (d20Roll == 1) {
	console.log("HAH! You missed!");
} else if (d20Roll == 20) {
	console.log(calcDamage(wepDamage));
} else {
	if (modified > armorClass) {
		console.log(`Hit! ${calcDamage(wepDamage)} damage`);
	} else {
		console.log("Miss!");
	}
}

function calcDamage(dieString) {
	let toSplit = dieString.split("d");
	let rollTimes = toSplit[0];
	let dieSides = toSplit[1];

	return varDie(rollTimes, dieSides);
}

function varDie(rollX, sides) {
	let sum = 0;
	for (let i = 0; i < sides; i++) {
		let currRoll = Math.floor(Math.random() * rollX) + 1;
		sum += currRoll;
	}

	return sum;
}
