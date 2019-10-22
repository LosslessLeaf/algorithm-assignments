const fs = require("fs");
const path = require("path");
const read = fs.readFile;
const randomPath = __dirname + "/../TestCases/A-large-practice.in";
const correctedPath = path.normalize(randomPath);

read(correctedPath, "utf8", function(err, data) {
	processFile(data);
});

var currentTest = 0;

processFile = content => {
	// contents of file comes in as giant string. split the string into arrays based on the newline character
	var contentArrays = content.split("\n");

	// take first element and set it as the T (number of test cases) variable
	let T = contentArrays[0];

	// loop through array of test cases, starting at the first (second) item in the content array
	for (let i = 1; i < contentArrays.length - 1; i++) {
		// set i to a global variable currentTest
		currentTest = i;
		// split each string in the content array (Ex: "+--+-++ 3") by the " " char
		let array = contentArrays[i].split(" ");
		// current range is the string of pluses and minuses, split into an array of each character
		let currentRange = array[0].split("");
		//currentK is the size of the flipper, as an integer
		let currentK = array[1];

		// calls the check function which checks if the combination of "pancakes" and flipper size is possible
		// if so, return number of flips.
		check(currentK, currentRange);
	}

	// Write concatenated outputString out to a file
	outputString = outputString.substr(0, outputString.length - 1);

	fs.writeFile("OutputLarge.in", outputString, err => {
		// In case of a error throw err.
		if (err) throw err;
	});
};

var outputString = "";

function check(flipperSize, currentArr) {
	// K to match problem variable
	let K = flipperSize;

	// range = passed range
	let range = currentArr;

	// temporary array for flippable elements
	let tempArray = [];

	// range to check (range minus the size of the flipper)
	let rangeToCheck = range.length - (flipperSize - 1);

	// flip tracker
	let flips = 0;

	// array of unique elements in the range
	let uniques = new Set(range);

	// Check to see if the array is all '+'s, if so exit with 0 flips.
	if (uniques.has("-") == false) {
		outputString += "Case #" + currentTest + ": " + flips + "\n";
		return flips;
	}

	// If not all '+'s, loop through doing a bubble sort method to check if you can flip enough
	// to get rid of all '-'s in the array
	for (let b = 0; b < rangeToCheck; b++) {
		let tempB = b;
		if (range[b] == "-") {
			let counter = 0;

			// If it finds a '-', push b + size of flipper elements to the temp array
			for (let q = b; counter < K; q++, counter++) {
				tempArray.push(range[q]);
			}

			// flip the temp array's elements
			flip(tempArray);

			// replace the elements in the original array, then continue looping
			for (counter = 0; counter < tempArray.length; counter++) {
				range[b] = tempArray[counter];
				b++;
			}
			b = tempB;
			tempArray = [];
			flips++;
		}
	}

	// Set uniques to the newly modified range
	uniques = new Set(range);

	// Check to see if, after all flips, there are remaining '-'s. If so, it's impossible
	if (uniques.has("-") == true) {
		outputString += "Case #" + currentTest + ": Impossible\n";
		return false;
	}
	// Otherwise, it's possible. Output the number of flips.
	else {
		outputString += "Case #" + currentTest + ": " + flips + "\n";
		return flips;
	}
}

// Function that takes an array and switches all '-'s to '+'s and vice versa.
function flip(temp) {
	for (let i = 0; i < temp.length; i++) {
		if (temp[i] == "-") {
			temp[i] = "+";
		} else {
			temp[i] = "-";
		}
	}
}
