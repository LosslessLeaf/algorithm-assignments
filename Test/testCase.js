function minimumBribes(q) {
	let correctArr = [];
	let sum = 0;
	for (let i = 1; i < q.length + 1; i++) {
		correctArr.push(i);
	}
	console.log("Correct:", correctArr);
	for (let i = 0; i < q.length; i++) {
		if (q[i] != 1) {
			break;
		}
		if (q[i] != correctArr[i]) {
			let temp = q[i];
			sum += correctArr.indexOf(temp) - q.indexOf(temp);
			// console.log(correctArr.indexOf(temp), temp);
			console.log(q);
			q.splice(i, 1);
			console.log(q);
			q.splice(correctArr.indexOf(temp), 0, temp);
			console.log(q);
		}
		console.log(sum);
	}
}

// minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]);
// minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
