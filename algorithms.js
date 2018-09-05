// ==============================
// === CONVERT TO CELSIUS =======
// ==============================
function convertToF(celsius) {
  let fahrenheit;

  if (celsius !== "undefined") {
     fahrenheit = (celsius * (9/5) + 32);
  }
  return fahrenheit;
}


// ==============================
// ===== REVERSE A STRING =======
// ==============================
function reverseString(str) {
  let newStr = str.split("").reverse().join("");
  
  return newStr;
}


// ==============================
// ======== FACTORIALIZE ========
// ==============================
function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    num = num * factorialize(num-1);
  }
  return num;
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

