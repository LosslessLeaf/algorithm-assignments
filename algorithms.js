// ==============================
// === CONVERT TO CELSIUS =======
// ==============================
let fahrenheit;

const convertToF = (celsius) => (celsius !== "undefined" ? fahrenheit = (celsius * (9/5) + 32) : fahrenheit);


// ==============================
// ===== REVERSE A STRING =======
// ==============================
let newStr;

const reverseString = str => (newStr = str.split("").reverse().join(""));

// ==============================
// ======== FACTORIALIZE ========
// ==============================
const factorialize = num => num === 0 || num === 1 ? 1 : num = num * factorialize(num-1);

// ==============================
// ======== LONGEST WORD ========
// ==============================
function findLongestWordLength(str) {
  let newStr = str.split(" ");
  let longestWord = 0;
  
  for ( let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > longestWord) {
      longestWord = newStr[i].length;
    }
  }
  return longestWord;
}

// ==============================
// ====== LARGEST NUMBERS =======
// ==============================
function largestOfFour(arr) {
    let largest = [-100, -100, -100, -100];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > largest[i]) {
                largest[i] = arr[i][j];
                console.log(largest);
            }
        }
    }
    console.log("This array: [" + largest + "] is the largest.");
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// ==============================
// ======= CONFIRM ENDING =======
// ==============================

const confirmEnding = (str, target) => str.slice(str.length - target.length) === target;

confirmEnding("Bastian", "n");

// ==============================
// ==== REPEATSTRINGxTIMES ======
// ==============================

