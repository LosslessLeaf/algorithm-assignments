const fs = require("fs");
const read = fs.readFile;
// let content;

// console.log("hello", __dirname);
// console.log(__dirname + `\\..\TestCases\\A-small-practice.in`);

var path = require("path");

var randomPath = __dirname + "/../TestCases/A-large-practice.in";

var correctedPath = path.normalize(randomPath); //that's that

// console.log(correctedPath);

read(correctedPath, "utf8", function(err, data) {
	// content = data;
	processFile(data);
});

var currentTest = 0;

processFile = content => {
	var contentArrays = content.split("\n");
	let T = contentArrays[0];
	// console.log(`Test Cases: ${T}`);

	for (let i = 1; i < contentArrays.length - 1; i++) {
		// if (i == 4) {
		// 	break;
		// }
		currentTest = i;
		let array = contentArrays[i].split(" ");
		// for (let j = 0; j < array.length; j++) {
		let currentK = array[1];
		let currentRange = array[0].split("");
		// console.log(K, range);
		check(currentK, currentRange);
		// }
	}

	// console.log(outputString);
	// Write data in 'Output.txt' .
	outputString = outputString.substr(0, outputString.length - 1);

	fs.writeFile("OutputLarge.in", outputString, err => {
		// In case of a error throw err.
		if (err) throw err;
	});
};

var outputString = "";

function check(flipperSize, currentArr) {
	let K = flipperSize;
	let range = currentArr;
	let tempArray = [];
	// console.log("Range initial:", range);
	let rangeToCheck = range.length - (flipperSize - 1);
	let flips = 0;
	let uniques = new Set(range);

	// if (uniques.has("-") == false) {
	// 	console.log(`Case #${currentTest}: ${flips}`);
	// 	return flips;
	// }
	if (uniques.has("-") == false) {
		// console.log(`Case #${currentTest}: ${flips}`);
		outputString += "Case #" + currentTest + ": " + flips + "\n";
		return flips;
	}
	for (let b = 0; b < rangeToCheck; b++) {
		// console.log("Current Loop:", b, range[b]);
		let tempB = b;
		if (range[b] == "-") {
			let counter = 0;
			for (let q = b; counter < K; q++, counter++) {
				tempArray.push(range[q]);
			}

			// console.log("Before:", tempArray);

			flip(tempArray);

			// console.log("After:", tempArray);

			for (counter = 0; counter < tempArray.length; counter++) {
				range[b] = tempArray[counter];
				b++;
			}
			b = tempB;
			// console.log("Range after:", range);
			tempArray = [];
			flips++;
		}
	}
	uniques = new Set(range);

	// if (uniques.has("-") == true) {
	// 	console.log(`Case #${currentTest}: Impossible`);
	// 	return false;
	// } else {
	// 	console.log(`Case #${currentTest}: ${flips}`);
	// 	return flips;
	// }
	if (uniques.has("-") == true) {
		// console.log(`Case #${currentTest}: Impossible`);
		outputString += "Case #" + currentTest + ": Impossible\n";
		return false;
	} else {
		// console.log(`Case #${currentTest}: ${flips}`);
		outputString += "Case #" + currentTest + ": " + flips + "\n";
		return flips;
	}
}

function flip(temp) {
	for (let i = 0; i < temp.length; i++) {
		if (temp[i] == "-") {
			temp[i] = "+";
		} else {
			temp[i] = "-";
		}
	}
}
