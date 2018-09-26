const findLongestWordLength = str => {
    let newStr = str.split(" ");
    let longestWord = 0;

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].length > longestWord) {
            longestWord = newStr[i].length;
        }
    }
    return longestWord;
};

findLongestWordLength("A cow jumped over the moon");