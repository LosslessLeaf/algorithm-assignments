// ===============================================================================================
// === CONVERT TO CELSIUS ========================================================================
// ===============================================================================================
let fahrenheit;

const convertToF = (celsius) => (celsius !== "undefined" ? fahrenheit = (celsius * (9 / 5) + 32) : fahrenheit);

convertToF(25);

// ===============================================================================================
// ===== REVERSE A STRING ========================================================================
// ===============================================================================================
const reverseString = str => str.split("").reverse().join("");

reverseString("Hello world!");

// ===============================================================================================
// ======== FACTORIALIZE =========================================================================
// ===============================================================================================
const factorialize = num => num === 0 || num === 1 ? 1 : num = num * factorialize(num - 1);

factorialize(5);

// ===============================================================================================
// ======== LONGEST WORD =========================================================================
// ===============================================================================================
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

// ===============================================================================================
// ====== LARGEST NUMBERS ========================================================================
// ===============================================================================================
const largestOfFour = arr => {
    let largest = [-100, -100, -100, -100];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest[i]) {
                largest[i] = arr[i][j];
                console.log(largest);
            }
        }
    }
    console.log("This array: [" + largest + "] is the largest.");
};


largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

// ===============================================================================================
// ======= CONFIRM ENDING ========================================================================
// ===============================================================================================
const confirmEnding = (str, target) => str.slice(str.length - target.length) === target;

confirmEnding("Bastian", "n");

// ===============================================================================================
// ==== REPEATSTRINGxTIMES =======================================================================
// ===============================================================================================
const repeatStringNumTimes = (str, num) => {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    console.log(newStr);
    return newStr;
};

repeatStringNumTimes("hello", 3);

// ===============================================================================================
// ==== TRUNCATE A STRING ========================================================================
// ===============================================================================================
const truncateString = (str, num) => {
    // Clear out that junk in your trunk
    if (str.length > num) {
        str = str.slice(0, num);
        let newStr = str + "...";
        return newStr;
    }

    return str;
};

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// ===============================================================================================
// ==== FINDERS KEEPERS ==========================================================================
// ===============================================================================================
const findElement = (arr, func) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            console.log(num);
            return num;
        }
    }
    return undefined;
};

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
findElement([1, 2, 3, 4], num => num % 2 === 0);

// ===============================================================================================
// ==== BOO WHO(BOOLEAN CHECKER) =================================================================
// ===============================================================================================
const booWho = bool => (bool === true || bool === false) ? true : false;

booWho(null);

// ===============================================================================================
// ==== TITLE CASE A SENTENCE ====================================================================
// ===============================================================================================

// function titleCase(str) {
//     let finalString = "";
//     let newStr = str.toLowerCase().split(" ");
//     for (let i = 0; i < newStr.length; i++) {
//       finalString += newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1) + " ";
//     }
//   console.log(finalString);
//   return finalString;
// }

// titleCase("I'm a little tea pot");


const titleCase = (str) => {
    let finalString = "";
    let newStr = str.toLowerCase().split(" ");
    console.log(finalString);
    for (let i = 0; i < newStr.length; i++) {
        if (i == newStr.length - 1) {
            finalString += newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
        }
        else {
            finalString += newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1) + " ";
        }
    }
    console.log(finalString);
    return finalString;
};

titleCase("I'm a little tea pot");

// ===============================================================================================
// ==== SLICES AND SPLICES =======================================================================
// ===============================================================================================
