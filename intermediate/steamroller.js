function steamrollArray(arr) {
	// I'm a steamroller, baby
	let mainArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length != 0) {
			if (!Array.isArray(arr[i])) {
				mainArr.push(arr[i]);
			} else {
				while (Array.isArray(arr[i])) {
					mainArr.push(arr[i][0]);
					arr[i] = arr[i][1];
				}
			}
		}
	}
	for (let i = 0; i < mainArr.length; i++) {
		if (Array.isArray(mainArr[i])) {
			mainArr[i] = mainArr[i][0];
		}
	}
	console.log(mainArr);
	return mainArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

steamrollArray([1, [], [3, [[4]]]]);
