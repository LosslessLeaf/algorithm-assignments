function fearNotLetter(str) {
	let strSplit = str.split("");
	let strArray = [];
	let answer = "";

	for (let i = 0; i < 26; i++) {
		strArray.push(String.fromCharCode(i + 97));
	}

	for (let i = 0; i < 26; i++) {
		if (strArray[0] == strSplit[0]) {
			break;
		} else if (strArray[0] != strSplit[0]) {
			strArray.shift();
		}
	}

	for (let i = 0; i < strSplit.length; i++) {
		if (strSplit[i] != strArray[i]) {
			answer = strArray[i];
			console.log(answer);
			return answer;
		}
	}
	return undefined;
}

fearNotLetter("abce");
fearNotLetter("stvwx");
