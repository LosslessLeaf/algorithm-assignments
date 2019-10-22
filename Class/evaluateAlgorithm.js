// function evalAlgorithm(formula) {
// 	let mathArr = formula.split(" ");
// 	// for (x in mathArr) {
// 	// 	console.log(mathArr[x]);
// 	// }

// 	// let int1 = parseInt(mathArr[0]);
// 	// let int2 = parseInt(mathArr[2]);
// 	// let operator = mathArr[1];
// 	// console.log(formula.indexOf(" "));
// 	// let i = 0;
// 	for (let i = 1; i <= mathArr.length; i += 2) {
// 		if (i == mathArr.length) {
// 			i -= 2;
// 		}

// 		let index1 = i - 1;
// 		let index2 = i + 1;

// 		switch (mathArr[i]) {
// 			case "x":
// 				console.log(index1, index2);
// 				mathArr[index1] *= mathArr[index2];
// 				mathArr.splice(i, 2);
// 				// i -= 1;
// 				break;
// 			case "/":
// 				mathArr[index1] /= mathArr[index2];
// 				mathArr.splice(i, 2);

// 				// i -= 1;
// 				break;
// 		}
// 		console.log(mathArr, i);
// 	}

// 	for (let i = 1; i <= mathArr.length; i += 2) {
// 		if (i == mathArr.length) {
// 			i -= 2;
// 		}
// 		let index1 = i - 1;
// 		let index2 = i + 1;

// 		switch (mathArr[i]) {
// 			case "+":
// 				mathArr[index1] += mathArr[index2];
// 				mathArr.splice(1, 2);
// 				break;
// 			case "-":
// 				mathArr[index1] -= mathArr[index2];
// 				mathArr.splice(1, 2);
// 				break;
// 		}
// 		console.log(mathArr);
// 	}

// 	// do {
// 	// 	// for (let i = 0; i < mathArr.length; i++) {
// 	// 	// let index1 = parseInt(0);
// 	// 	// let index2 = parseInt(i + 1);
// 	// 	// console.log(mathArr[index1], mathArr[e], mathArr[index2]);
// 	// 	// console.log(mathArr[index1] - mathArr[index2]);
// 	// 	// console.log(i, index1, index2);
// 	// 	// console.log(mathArr[i]);
// 	// 	mathArr[0] = parseInt(mathArr[0]);
// 	// 	mathArr[2] = parseInt(mathArr[2]);
// 	// 	switch (mathArr[1]) {
// 	// 		// case "x":
// 	// 		// 	mathArr[0] *= mathArr[2];
// 	// 		// 	mathArr.splice(1, 2);
// 	// 		// 	break;
// 	// 		// case "/":
// 	// 		// 	mathArr[0] /= mathArr[2];
// 	// 		// 	mathArr.splice(1, 2);
// 	// 		// 	break;
// 	// 		case "+":
// 	// 			mathArr[0] += mathArr[2];
// 	// 			mathArr.splice(1, 2);
// 	// 			break;
// 	// 		case "-":
// 	// 			mathArr[0] -= mathArr[2];
// 	// 			mathArr.splice(1, 2);
// 	// 	}
// 	// 	console.log(mathArr[0]);

// 	// 	console.log(mathArr);
// 	// 	// }
// 	// } while (mathArr.length != 1);

// 	// console.log(int1);
// }

// // evalAlgorithm("2 x 4");
// evalAlgorithm("2 x 4 + 6 / 2 x 10");
// evalAlgorithm("14 / 2 + 13 x 2 - 20 / 4");
// // evalAlgorithm("14 - 12");
// // evalAlgorithm("0 / 24");
// // evalAlgorithm("9 x 3");
// // evalAlgorithm("15 + 5");

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
