function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
    var splitString = str.split("");
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i] === splitString[i].toUpperCase()) {
            var wordStart = splitString[i];
        }
    }

  return str.toLowerCase().split(" ").join("-");
}

spinalCase('This Is Spinal Tap');