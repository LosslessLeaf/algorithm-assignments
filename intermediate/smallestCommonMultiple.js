function smallestCommons(arr) {
	let num1 = arr[0];
	let num2 = arr[1];
	let i = 0;
	let answer = 1;
	console.log(num1, num2);
	let numArr = [];
	if (num1 > num2) {
		i = num2;
	} else {
		i = num1;
	}

	let length = Math.abs(num1 - num2) + i;
	// console.log(length);
	for (i; i <= length; i++) {
		numArr.push(i);
	}
	let flag = false;

	while (!flag) {
		for (let i = 0; i < numArr.length; i++) {
			if (answer % numArr[i] == 0) {
				flag = true;
			} else {
				flag = false;
				break;
			}
		}
		answer++;
	}
	// console.log(answer - 1);
	return answer - 1;
}

smallestCommons([2, 10]);
