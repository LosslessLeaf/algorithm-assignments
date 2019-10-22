function isPrime(value) {
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {
			console.log("false");
			return false;
		}
	}
	console.log("true");
	return value > 1;
}

isPrime(46509);
isPrime(35);
isPrime(247);
isPrime(1029);
isPrime(3131);

function generateBits() {
	let bitArray = [];

	console.log(1);
	bitArray.push(1);

	for (let j = 0; j < 14; j++) {
		let randomBit = Math.round(Math.random());
		bitArray.push(randomBit);
		document.write(randomBit);
	}

	bitArray.push(1);

	document.write(1);

	document.write("\tBit array:", bitArray + "<br>");

	return bitArray;
}

function convertToBases(arr) {
	for (let i = 2; i <= 10; i++) {
		let i = 2;

		document.write("Base: " + i + "<br>");

		let bitSum = 0;

		for (let j = 0; j < bitArray.length; j++) {
			document.write(bitArray[j] * Math.pow(i, j) + "<br>");

			bitSum += bitArray[j] * Math.pow(i, j);
		}

		document.write("Bitsum:", bitSum);

		bitSum = 0;
	}
}

let bitArray = generateBits();

convertToBases(bitArray);
