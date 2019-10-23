function destroyer(arr) {
	// Remove all the values
	// console.log(arguments);

	let mainArr = arguments[0];

	for (let i = 1; i < arguments.length; i++) {
		mainArr = mainArr.filter(x => x != arguments[i]);
	}

	console.log(mainArr);
	return mainArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
