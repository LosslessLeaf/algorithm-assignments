function uniteUnique(arr) {
	let mainArr = arguments[0];

	for (let i = 1; i < arguments.length; i++) {
		arguments[i] = arguments[i].filter(x => !mainArr[x]);
		for (x in arguments[i]) {
			mainArr.push(arguments[i][x]);
		}
	}

	console.log(mainArr);
	return mainArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
