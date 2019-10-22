let array = [
	{ name: "Joe", age: 25 },
	{ name: "Mike", age: 32 },
	{ name: "Sally", age: 28 },
	{ name: "Peter", age: 28 },
	{ name: "Brett", age: 50 }
];

let indexArray = [];

function getIndex(arr, key, value) {
	for (let i = 0; i < Object.keys(arr).length; i++) {
		if (arr[i][key] == value) {
			indexArray.push(i);
		}
	}

	console.log(indexArray);
}

getIndex(array, "age", 28);
