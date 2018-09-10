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
function factorialize(num) {
  return (num === 0 || num === 1 ? 1 : num = num * factorialize(num-1));
}

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
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

