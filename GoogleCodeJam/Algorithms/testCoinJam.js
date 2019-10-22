const fs = require("fs");

function generateBits() {
	let bitArr = [];
	bitArr.push(1);
	for (let i = 0; i < 14; i++) {
		let randomBit = Math.round(Math.random());
		bitArr.push(randomBit);
	}
	bitArr.push(1);
	return bitArr;
}

function convertToBases(arr) {
	for (let i = 2; i <= 10; i++) {
		// console.log("Base:", i);
		let bitSum = 0;
		for (let j = 0; j < arr.length; j++) {
			// console.log(arr[j] * Math.pow(i, j));
			bitSum += arr[j] * Math.pow(i, j);
		}
		// console.log("Bitsum:", bitSum);
		if (isPrime(bitSum) == false) {
			let firstNonTrivial = checkDivisors(bitSum, i);
			nonTrivialArr.push(firstNonTrivial);
			// console.log(nonTrivialArr);
		} else if (isPrime(bitSum) == true) {
			// console.log("Bit array is prime on base: ", i);
			break;
		}
		// console.log("\n");
		bitSum = 0;
	}
}

function isPrime(value) {
	let m = Math.sqrt(value);
	let isPrime = true;
	for (var i = 2; i <= m; i++) {
		if (value % i == 0) {
			return false;
		}
	}
	return true;
}

function checkDivisors(value, index) {
	for (let i = 2; i < value; i++) {
		if (value % i == 0) {
			// console.log("First non-trivial divisor: " + i);
			return i;
		}
	}
}

let nonTrivialArr = [];
let resultantString = "Case #1:\n";
let counter = 0;

do {
	let bitArray = generateBits();
	// console.log("testing new coin");
	convertToBases(bitArray);
	if (nonTrivialArr.length == 9) {
		// console.log(bitArray.join(""));
		nonTrivialArr.join(" ");
		resultantString += bitArray.join("") + " " + nonTrivialArr.join(" ") + "\n";
		counter++;
	}
	nonTrivialArr = [];
} while (counter < 50);

console.log(resultantString);
