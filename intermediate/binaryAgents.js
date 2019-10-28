function binaryAgent(str) {
	let newStr = str.split(" ");
	let answer = [];

	for (let i = 0; i < newStr.length; i++) {
		let splitStr = newStr[i].split("");
		console.log(splitStr);
		let sum = 0;
		let multiplier = 1;
		for (let j = splitStr.length - 1; j > 0; j--) {
			sum += splitStr[j] * multiplier;
			multiplier *= 2;
		}
		answer.push(sum);
		console.log(sum);
	}
	console.log(answer);
	for (let i = 0; i < answer.length; i++) {
		answer[i] = String.fromCharCode(answer[i]);
	}
	console.log(answer.join(""));

	return answer.join("");
}

binaryAgent(
	"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
