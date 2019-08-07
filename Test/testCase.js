function evalAlgorithm(formula) {
	let mathArr = formula.split(" ");

	for (let i = 1; i <= mathArr.length; i += 2) {
		if (
			i == mathArr.length &&
			(mathArr[i - 2] == "x" || mathArr[i - 2] == "/" || mathArr[i - 2] == "%")
		) {
			i -= 2;
		}

		let index1 = i - 1;
		let index2 = i + 1;

		switch (mathArr[i]) {
			case "x":
				mathArr[index1] *= mathArr[index2];
				mathArr.splice(i, 2);
				break;
			case "/":
				mathArr[index1] /= mathArr[index2];
				mathArr.splice(i, 2);
				break;
			case "%":
				mathArr[index1] %= mathArr[index2];
				mathArr.splice(i, 2);
				break;
		}
	}

	for (let i = 1; i <= mathArr.length; i += 2) {
		if (
			i == mathArr.length &&
			(mathArr[i - 2] == "+" || mathArr[i - 2] == "-")
		) {
			i -= 2;
		}
		let index1 = i - 1;
		let index2 = i + 1;

		switch (mathArr[i]) {
			case "+":
				mathArr[index1] = parseInt(mathArr[index1]);
				mathArr[index2] = parseInt(mathArr[index2]);
				mathArr[index1] += mathArr[index2];
				mathArr.splice(1, 2);
				break;
			case "-":
				mathArr[index1] -= mathArr[index2];
				mathArr.splice(1, 2);
				break;
		}
	}
	console.log(mathArr[0]);
}

evalAlgorithm("2 x 4");
evalAlgorithm("2 x 4 + 6 / 2 x 10");
evalAlgorithm("14 / 2 + 13 x 2 - 20 / 4");
evalAlgorithm("14 - 12");
evalAlgorithm("0 / 24");
evalAlgorithm("9 x 3");
evalAlgorithm("15 + 5");
evalAlgorithm("14 % 2 + 4");
