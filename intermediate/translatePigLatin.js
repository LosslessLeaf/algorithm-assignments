function translatePigLatin(str) {
    var vowelChecker = ["a", "e", "i", "o", "u"];
    var splitStr = str.split("");
    var beginToEnd = [];
    var counter = 0;
    var noMatches = [];
    for (let i = 0; i < splitStr.length; i++) {
        for (let j = 0; j < vowelChecker.length; j++) {
            if (splitStr[0] === vowelChecker[j]) {
                return splitStr.join("") + "way";
            }
            else if (splitStr[i] === vowelChecker[j]) {
                beginToEnd = splitStr.splice(0, counter);
                console.log(splitStr.join("") + beginToEnd.join("") + "ay");

                return splitStr.join("") + beginToEnd.join("") + "ay";
            } 
        } 
    noMatches += splitStr[i];
    counter++;
    }
    console.log(noMatches + "ay");
    return noMatches + "ay";

    // for (let i = 0; i < str.length; i++) {
    //     var firstBit = [];
    //     var newStr = [];
    //     for (let j = 0; j < vowelChecker.length; j++) {
    //         if (splitStr[i] === vowelChecker[j]){
    //             console.log(newStr.join("") + firstBit.join(""));
    //             return newStr.join("") + firstBit.join("");
    //         }
    //         firstBit.push(splitStr[i]);
    //         newStr = splitStr.slice(i, 1);
    //     }
    // }
}

translatePigLatin("glove");
translatePigLatin("rhythm");