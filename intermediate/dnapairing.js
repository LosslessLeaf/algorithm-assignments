function pairElement(str) {
	let strArray = str.split("");
	let answerArr = [];
	// console.log(strArray);
	for (let i = 0; i < strArray.length; i++) {
		console.log(strArray[i]);
		if (strArray[i] == "A") {
			answerArr.push(["A", "T"]);
		} else if (strArray[i] == "T") {
			answerArr.push(["T", "A"]);
		} else if (strArray[i] == "C") {
			answerArr.push(["C", "G"]);
		} else if (strArray[i] == "G") {
			answerArr.push(["G", "C"]);
		}
	}
	console.log(answerArr);
	return answerArr;
}

pairElement("GCG");
// pairElement("ATCGA");
// pairElement("TTGAG");
// pairElement("CTCTA");
