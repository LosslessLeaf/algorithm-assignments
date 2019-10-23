function dropElements(arr, func) {
	// Drop them elements.
	let flag = false;
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
		if (func(arr[i]) == true) {
			// flag = true;
			i = arr.length;
		} else {
			arr.shift();
		}
	}
	console.log(arr);
	return arr;
}

dropElements([0, 1, 0, 1], function(n) {
	return n === 1;
});
